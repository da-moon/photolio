use super::spec::Cache;
use anyhow::{bail, Result};
use log::{debug, info};
use serde::{de::DeserializeOwned, Serialize};
use std::{
    collections::HashMap,
    fs::OpenOptions,
    io::{self, BufReader},
    sync::RwLock,
};

pub struct InMemory<T> {
    disk_file: Option<String>,
    map: RwLock<HashMap<String, T>>,
}

impl<T> InMemory<T>
where
    T: Clone + DeserializeOwned + Serialize,
{
    #[allow(dead_code)]
    pub fn new() -> Self {
        InMemory {
            map: HashMap::new().into(),
            disk_file: None,
        }
    }

    pub fn load(file_name: &str) -> io::Result<Self> {
        info!("Loading memory cache from diks");

        let file = OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .open(file_name)?;
        let reader = BufReader::new(file);

        let map: HashMap<String, T> = match serde_json::de::from_reader(reader) {
            Err(err) if err.is_eof() => Ok(HashMap::new()),
            Err(err) => Err(err),
            Ok(m) => Ok(m),
        }?;

        Ok(InMemory {
            map: map.into(),
            disk_file: Some(file_name.into()),
        })
    }

    fn store_to_disk(&self) -> Result<()> {
        let file_name = match self.disk_file.clone() {
            Some(f) => f,
            _ => return Ok(()),
        };

        let file = OpenOptions::new()
            .write(true)
            .truncate(true)
            .open(file_name)?;

        match &self.map.read() {
            Ok(m) => {
                let mut snapshot: HashMap<String, T> = HashMap::new();
                for (k, v) in m.iter() {
                    snapshot.insert(k.clone(), v.clone());
                }
                debug!("Storing cache to disk ...");
                serde_json::ser::to_writer(file, &snapshot)?;

                Ok(())
            }
            Err(_) => bail!("map lock is poisoned"),
        }
    }
}

impl<T> Cache<T> for InMemory<T>
where
    T: Clone + DeserializeOwned + Serialize,
{
    fn get(&self, key: &str) -> Result<Option<T>> {
        match &self.map.read() {
            Ok(m) => Ok(m.get(key).cloned()),
            Err(_) => bail!("map lock is poisoned"),
        }
    }

    fn set(&self, key: &str, val: &T) -> Result<()> {
        match &mut self.map.write() {
            Ok(m) => {
                m.insert(key.to_string(), val.clone());
            }
            Err(_) => bail!("map lock is poisoned"),
        }

        self.store_to_disk()
    }

    fn flush(&self) -> Result<()> {
        match &mut self.map.write() {
            Ok(m) => {
                m.clear();
            }
            Err(_) => bail!("map lock is poisoned"),
        }

        self.store_to_disk()
    }
}
