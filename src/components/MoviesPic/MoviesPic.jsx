import React, { useContext } from 'react';

import { Container, Content, Wrapper } from './MoviesPic.styles';

import MoviesContext from '../../context/store';

const MoviesPic = () => {
  const ctx = useContext(MoviesContext);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrapper>
          <img
            src={!ctx.isLoading ? ctx.movies[0]?.imageCard : ''}
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
        <Wrapper>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatestmovieswiki%2Fthumb%2F0%2F04%2FAvengers2.jpg%2F330px-Avengers2.jpg&f=1&nofb=1"
            alt="Recommended movie"
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default MoviesPic;
