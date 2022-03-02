import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: '';
    background-image: url('/images/login-background.jpg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

export const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const SignUp = styled.a`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 17px 0;
  border-radius: 4px;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

export const CTALogoOne = styled.img``;
export const CTALogoTwo = styled.img`
  width: 90%;
`;
