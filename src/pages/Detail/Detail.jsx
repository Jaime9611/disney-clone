import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../../api/queries';
import { selectDemoState, selectUserName } from '../../redux/user/userSlice';

import {
  Container,
  Background,
  ImageTitle,
  ContentMeta,
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
  const user = useSelector(selectUserName);
  const demoState = useSelector(selectDemoState);
  const navigate = useNavigate();

  if (!demoState && !user) {
    navigate('/');
  }

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
        <img src={movie?.imageBg} alt={movie.title} />
      </Background>
      <ImageTitle>
        <img src={movie?.imageTitle} alt={movie.title} />
      </ImageTitle>
      <ContentMeta>
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
            <span />
            <span />
          </AddButton>
          <GroupWatchButton>
            <div>
              <img src="/images/group-icon.png" alt="group watch button" />
            </div>
          </GroupWatchButton>
        </Controls>
        <SubTitle>{movie?.subTitle}</SubTitle>
        <Description>{movie?.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
