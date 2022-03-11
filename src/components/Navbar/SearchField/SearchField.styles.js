import styled from 'styled-components';

export const SearchForm = styled.form`
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  width: 100%;
`;

export const SearchInput = styled.div`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  right: 0;
  width: 100%;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background-color: rgba(9, 11, 19, 0.7);
  z-index: -1;

  input {
    width: 300px;
    height: 30px;
    padding: 20px 30px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px transparent;
    border-radius: 10px;
    color: white;
    font-weight: bold;
  }
`;

export const HelpText = styled.small`
  align-self: end;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #e4e4e4;
`;
