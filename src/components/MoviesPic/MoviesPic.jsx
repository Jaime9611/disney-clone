import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Content, Wrapper } from './MoviesPic.styles';

import { Link } from 'react-router-dom';

const MoviesPic = ({ title, selected, isLoading }) => {
  const movies = useSelector(selected);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {!isLoading &&
          movies?.map((movie) => {
            return (
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <Wrapper>
                  <img src={movie.imageCard} alt={`${movie.title} pic`} />
                </Wrapper>
              </Link>
            );
          })}
      </Content>
    </Container>
  );
};

export default MoviesPic;
