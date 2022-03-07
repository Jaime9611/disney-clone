import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Content, Wrapper } from './MoviesPic.styles';

import { selectLoading, selectRecommended } from '../../redux/movie/movieSlice';

const MoviesPic = ({ onMovieClick }) => {
  const movies = useSelector(selectRecommended);
  const isLoading = useSelector(selectLoading);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {!isLoading &&
          movies?.map((movie) => {
            return (
              <Wrapper key={movie.id} onClick={() => onMovieClick(movie.id)}>
                <img src={movie.imageCard} alt={`${movie.title} pic`} />
              </Wrapper>
            );
          })}
      </Content>
    </Container>
  );
};

export default MoviesPic;
