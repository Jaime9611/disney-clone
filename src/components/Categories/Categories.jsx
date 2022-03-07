import React from 'react';

import { Container, Wrapper } from './Categories.styles';

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/images/viewers-disney.png" alt="disney category"></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-pixar.png" alt="pixar category"></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-marvel.png" alt="marvel category"></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-starwars.png" alt="starwars category"></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-national.png" alt="national category"></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrapper>
    </Container>
  );
};

export default Categories;
