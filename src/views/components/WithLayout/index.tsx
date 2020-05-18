import React from 'react';
import { Layout } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import IStore from 'models/IStore';
import { GlobalStyled } from '../GlobalStyled';
import AppLogo from '../AppLogo';
import AppMenu from '../AppMenu';
import { light, dark } from '../AppTheme';

const { Header, Content } = Layout;

const mapStateToProps = (state: IStore) => ({
  theme: state.theme.mode,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & ReturnType<typeof Object>;

const withLayout = <P extends object>(ComposedComponent: React.ComponentType<P>) => {
  type Props = PropsFromRedux & P;

  const WithLayout: React.FC<Props> = ({ theme, ...rest }) => {
    return (
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <Layout>
          <GlobalStyled />
          <Header>
            <AppLogo />
            <AppMenu />
          </Header>
          <Content>
            <ComposedComponent {...(rest as P)} />
          </Content>
        </Layout>
      </ThemeProvider>
    );
  };

  return connector(WithLayout);
};

export default withLayout;
