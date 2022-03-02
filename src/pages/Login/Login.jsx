import React from 'react';

import {
  Container,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  SignUp,
  Description,
} from './Login.styles';

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get premier access to Raya and the Last Dragon for and aditional
          sucription. As of 01/01/2022, the price of Disney+ will increase $1
          dollar.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;
