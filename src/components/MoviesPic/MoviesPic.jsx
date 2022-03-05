import React from 'react';

import { Container, Content, Wrapper } from './MoviesPic.styles';

const MoviesPic = ({ ctx, onMovieClick }) => {
  const { isLoading, movies } = ctx;

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {!isLoading &&
          movies?.map((movie) => {
            console.log('enter movies');
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
