import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getMovie } from '../../api/queries';

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
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const fetchMovie = async (id) => {
    const item = await getMovie(id);
    if (item) {
      setMovie(item);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchMovie(movieId);
  }, [movieId]);

  console.log(movie);
  return loading ? (
    <Container>
      <h2>Loading...</h2>
    </Container>
  ) : (
    <Container>
      <Background>
        <img src={movie?.imageBg} alt="movie background" />
      </Background>
      <ImageTitle>
        <img src={movie?.imageTitle} alt={movie.title} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play button" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="trailer button" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span aria-label="Add movie button">+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group watch button" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movie?.subTitle}</SubTitle>
      <Description>{movie?.description}</Description>
    </Container>
  );
};

export default Detail;
