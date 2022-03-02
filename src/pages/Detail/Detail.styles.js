import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayButton = styled.button`
  height: 56px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  cursor: pointer;
  background: rgb(249, 249, 249);
  border: none;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

export const AddButton = styled.button`
  width: 45px;
  height: 45px;
  padding-bottom: 3px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    font-size: 30px;
    color: white;
  }
`;

export const GroupWatchButton = styled(AddButton)`
  padding-bottom: 0;
  background: rgb(0, 0, 0);
`;

export const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

export const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
