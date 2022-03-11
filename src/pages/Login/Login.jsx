import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDemoState, selectUserName } from '../../redux/user/userSlice';

import {
  Container,
  Content,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  SignUp,
  BgImage,
  Description,
} from './Login.styles';

const Login = () => {
  const user = useSelector(selectUserName);
  const demoState = useSelector(selectDemoState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || demoState) {
      navigate('/home');
    }
  }, [user, demoState]);

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
