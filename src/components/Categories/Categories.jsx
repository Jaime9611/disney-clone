import React from 'react';

import { Container, Wrapper } from './Categories.styles';

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/images/viewers-disney.png" alt="disney category"></img>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-pixar.png" alt="pixar category"></img>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-marvel.png" alt="marvel category"></img>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-starwars.png" alt="starwars category"></img>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-national.png" alt="national category"></img>
      </Wrapper>
    </Container>
  );
};

export default Categories;
