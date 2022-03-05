import React, { useContext } from 'react';

import { Container, Content, Wrapper } from './MoviesPic.styles';

import MoviesContext from '../../context/store';

const MoviesPic = () => {
  const ctx = useContext(MoviesContext);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {!ctx.isloading &&
          ctx.movies.map((movie) => {
            return (
              <Wrapper key={movie.id}>
                <img src={movie.imageCard} alt={`${movie.title} pic`} />
              </Wrapper>
            );
          })}
      </Content>
    </Container>
  );
};

export default MoviesPic;
