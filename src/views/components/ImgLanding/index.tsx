import styled from 'styled-components';
import background from 'assets/images/background.jpg';

const ImgLanding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 80%;
  height: 100vh;
  width: 100vw;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.bgOverlay};
  }
`;

export default ImgLanding;
