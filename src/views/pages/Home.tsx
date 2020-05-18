import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import withLayout from 'views/components/WithLayout';
import ImgLanding from 'views/components/ImgLanding';
import Autocomplete from 'views/components/Autocomplete';

const SUGGESTIONS: string[] = [
  'Hồ Chí Minh',
  'Hà Nội',
  'Hải Phòng',
  'Quảng Ngãi',
  'Quảng Nam',
  'Gia Lai',
  'Kon Tum',
  'Quy Nhơn',
  'Bình Định',
  'Phú Quốc',
];

const Search = styled(Col).attrs({
  xs: { span: 20 },
  md: { span: 18 },
  lg: { span: 14 },
})`
  z-index: 10;
`;

const Home: React.SFC = () => (
  <ImgLanding>
    <Search>
      <Autocomplete suggestions={SUGGESTIONS} />
    </Search>
  </ImgLanding>
);

export default withLayout(Home) as React.ComponentType;
