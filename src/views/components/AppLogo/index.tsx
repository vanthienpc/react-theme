import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as AirbnbLogo } from 'assets/svgs/airbnb-logo.svg';

const ImgLogo = styled(AirbnbLogo).attrs({
  style: {
    fill: '#ffffff',
    width: '2em',
    height: '2em',
  },
})``;

const Component = styled(Link)`
  display: flex;
  position: absolute;
  left: 20px;
`;

const AppLogo: React.FC = () => (
  <Component to="/" title="App Logo">
    <ImgLogo />
  </Component>
);

export default AppLogo;
