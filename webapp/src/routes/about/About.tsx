import {
  // LinkGithub,
  // LinkSpotify,
  // LinkUnsplash,
  LinkDeviantart,
  LinkInstagram,
  LinkMail,
  LinkTiktok,
  LinkTwitter,
  LinkYoutube,
} from 'components/ContactLinks';

import { ALink } from 'components/ALink';
import { IconsList } from 'components/IconsList';
import { PaddingContainer } from 'components/PaddingContainer';
import { WRAP_DISPLAY_BREAKPOINT } from 'static/static';
import { formatDistanceToNowStrict } from 'date-fns';
import styled from 'styled-components';

const Image = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: cover;
  width: 50%;
  max-height: 60vh;
  aspect-ratio: 500 / 590;
  max-width: 500px;
  float: left;
  margin: 5px 40px 20px 0;

  @media screen and (max-width: ${WRAP_DISPLAY_BREAKPOINT}) {
    float: unset;
    width: 100%;
    aspect-ratio: 500 / 400;
    background-position-y: 25%;
    max-height: unset;
  }
`;

const TextContainer = styled.div`
  text-align: justify;
  padding: 0 50px;

  > img {
    width: 50%;
    max-width: 500px;
    float: left;
    margin: 5px 40px 20px 0;
  }
`;

const AGE = formatDistanceToNowStrict(new Date(1998, 12, 12), {
  roundingMethod: 'floor',
});

export const AboutRoute: React.FC = () => {
  return (
    <PaddingContainer>
      <TextContainer>
        <Image url="assets/avatar.jpg" />
        <h2>Hey 👋</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum vestibulum velit non posuere. Donec gravida blandit tortor quis facilisis. Donec quis auctor purus, nec sodales magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a arcu euismod, ultrices quam ac, sollicitudin purus. Mauris et mi ipsum. Sed eget massa sit amet velit vestibulum ornare eu vel nulla.
        </p>
        <p>
          In et magna quis mi consectetur aliquam. Mauris
          hendrerit urna ultrices nulla condimentum hendrerit. Nunc vitae
          vulputate libero. Nullam tincidunt, purus a egestas efficitur,
          arcu nisl bibendum sem, et mattis libero est vel eros.
          Phasellus in odio ut ante rutrum mollis. Phasellus elit mauris,
          bibendum ac aliquet et, lacinia at quam. Morbi at libero id
          est eleifend placerat non vitae tortor. Suspendisse potenti.
          Phasellus vel lobortis sapien, vitae tempor lectus.
        </p>
        <h2>Get to know me ✉️</h2>
        <IconsList>
          <LinkMail />
          <LinkInstagram />
          <LinkDeviantart />
          <LinkTwitter />
          <LinkYoutube />
          <LinkTiktok />
          // <LinkUnsplash />
          // <LinkGithub />
          // <LinkSpotify />
        </IconsList>
      </TextContainer>
    </PaddingContainer>
  );
};
