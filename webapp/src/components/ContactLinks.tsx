import { ALink } from './ALink';
import { ReactComponent as IconDeviantart } from 'assets/deviantart.svg';
// import { ReactComponent as IconDiscord } from 'assets/discord.svg';
// import { ReactComponent as IconGithub } from 'assets/github.svg';
import { ReactComponent as IconInstagram } from 'assets/instagram.svg';
import { ReactComponent as IconMail } from 'assets/mail.svg';
// import { ReactComponent as IconSpotify } from 'assets/spotify.svg';
import { ReactComponent as IconTiktok } from 'assets/tiktok.svg';
import { ReactComponent as IconTwitter } from 'assets/twitter.svg';
// import { ReactComponent as IconUnsplash } from 'assets/unsplash.svg';
import { ReactComponent as IconYoutube } from 'assets/youtube.svg';

export const LinkMail = () => (
  <ALink href="mailto:contact@krphotography.com">
    <IconMail />
  </ALink>
);

export const LinkInstagram = () => (
  <ALink href="https://instagram.com">
    <IconInstagram />
  </ALink>
);

// export const LinkUnsplash = () => (
//   <ALink href="https://unsplash.com">
//     <IconUnsplash />
//   </ALink>
// );

export const LinkDeviantart = () => (
  <ALink href="https://deviantart.com">
    <IconDeviantart />
  </ALink>
);

export const LinkTwitter = () => (
  <ALink href="https://x.com">
    <IconTwitter />
  </ALink>
);

export const LinkYoutube = () => (
  <ALink href="https://youtube.com">
    <IconYoutube />
  </ALink>
);

// export const LinkGithub = () => (
//   <ALink href="https://github.com/zekrotja">
//     <IconGithub />
//   </ALink>
// );

// export const LinkSpotify = () => (
//   <ALink href="https://open.spotify.com/user/zekrotja">
//     <IconSpotify />
//   </ALink>
// );

export const LinkTiktok = () => (
  <ALink href="https://tiktok.com">
    <IconTiktok />
  </ALink>
);

// export const LinkDiscord = () => (
//   <ALink href="https://discord.zekro.de">
//     <IconDiscord />
//   </ALink>
// );
