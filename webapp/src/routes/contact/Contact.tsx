import {
  LinkDiscord,
  LinkInstagram,
  LinkMail,
  LinkTwitter,
} from 'components/ContactLinks';

import { Embed } from 'components/Embed';
import { IconsList } from 'components/IconsList';
import { PaddingContainer } from 'components/PaddingContainer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
`;

const ContentContainer = styled.div`
  padding-bottom: 30px;
  &:last-child {
    padding-bottom: 0px;
  }
`;

const ContactMe = () => (
  <ContentContainer>
    <h1>Feel free to contact us 📫</h1>
    <IconsList>
      <LinkTwitter />
      <LinkInstagram />
      <LinkDiscord />
    </IconsList>
    <p>
      If you prefer, you can also send me a mail to{' '}
      <Embed>contact@krphotography</Embed>.
    </p>
    <IconsList>
      <LinkMail />
    </IconsList>
  </ContentContainer>
);

// NOTE: commented out
// const ContentUsage = () => (
//   <ContentContainer>
//     <h1>Content Usage 🖼️</h1>
//     <p>
//       Generally, you are completely allowed to use all of my content for
//       non-public personal use (wallpaper, wallprint, ...).
//     </p>
//     <p>
//       You are also allowed to use my content publicly in your own creations,
//       your page, applicatrion or social media{' '}
//       <strong>if you give proper credits to me</strong>. This includes my name (
//       <Embed>Ringo Hoffmann</Embed>) as well as a link to my web page (
//       <Embed>zekro.de</Embed>) either in the <Embed>About</Embed> section of
//       your web page / application or adjacent to the content post, for example
//       in the instagram image description or tweet content.
//     </p>
//     <p>
//       If you want to use my work for any commercial or advertising application,
//       please contact me so we can negotiate a deal together. 😉
//     </p>
//   </ContentContainer>
// );

export const ContactRoute: React.FC = () => {
  return (
    <PaddingContainer>
      <Container>
        <ContactMe />
        // <ContentUsage />
      </Container>
    </PaddingContainer>
  );
};
