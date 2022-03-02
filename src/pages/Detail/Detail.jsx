import React from 'react';

import {
  Container,
  Background,
  ImageTitle,
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupWatchButton,
  SubTitle,
  Description,
} from './Detail.styles';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7b%2Fb5%2F3d%2F7bb53dbcf8429535226f4df3d154213c.jpg&f=1&nofb=1" />
      </Background>
      <ImageTitle>
        <img src="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 * 7m * Fantasy, kids, Animation</SubTitle>
      <Description>
        A Chinese mon who's sad when her grown son leaves the house to be a
        programmer and engenner in system communications.
      </Description>
    </Container>
  );
};

export default Detail;
