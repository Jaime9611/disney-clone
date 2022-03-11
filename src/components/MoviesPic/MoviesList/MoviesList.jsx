import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Wrapper, TextBox } from '../MoviesPic.styles';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <h4>Results</h4>
      <Content>
        {movies &&
          movies?.map((movie) => {
            return (
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <Wrapper>
                  <TextBox>
                    <p>{movie.title}</p>
                  </TextBox>
                  <img src={movie.imageCard} alt={`${movie.title} pic`} />
                </Wrapper>
              </Link>
            );
          })}
      </Content>
    </Container>
  );
};

export default MovieList;
