import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Content, Wrapper, TextBox } from './MoviesPic.styles';

import { Link } from 'react-router-dom';

const MoviesPic = ({ title, selected, isLoading, idName }) => {
  const movies = useSelector(selected);

  return (
    <Container id={idName}>
      <h4>{title}</h4>
      <Content>
        {!isLoading &&
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

export default MoviesPic;
