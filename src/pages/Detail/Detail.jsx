import React, { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

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
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    const snapshot = await getDocs(collection(db, 'Movies'));
    let movies = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setMovie(movies[0]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Background>
        <img src={`${movie.imageBg}`} />
      </Background>
      <ImageTitle>
        <img src={`${movie.imageTitle}`} />
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
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>{movie.description}</Description>
    </Container>
  );
};

export default Detail;
