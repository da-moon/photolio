use std::{
    error::Error,
    fs::File,
    io::{Cursor, Read, Seek},
};

pub trait ReadSeek: Read + Seek {}
impl ReadSeek for File {}
impl ReadSeek for Cursor<std::vec::Vec<u8>> {}

pub trait Storage {
    fn create_bucket_if_not_exists(&self, bucket: &str) -> Result<(), Box<dyn Error>>;

    fn store<R>(&self, bucket: &str, name: &str, content: &mut R) -> Result<(), Box<dyn Error>>
    where
        R: Read;

    fn read(
        &self,
        bucket: &str,
        name: &str,
    ) -> Result<Box<dyn ReadSeek>, Box<dyn Error + Send + Sync>>;

    fn exists(&self, bucket: &str, name: &str) -> Result<bool, Box<dyn Error>>;

    fn list(&self, bucket: &str) -> Result<Vec<String>, Box<dyn Error>>;
}
