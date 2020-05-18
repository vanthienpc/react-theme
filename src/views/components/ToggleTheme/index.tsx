import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Switch } from 'antd';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { ReactComponent as SunnyIcon } from 'assets/svgs/sunny-icon.svg';
import { ReactComponent as NightIcon } from 'assets/svgs/night-icon.svg';
import { toggleTheme } from 'stores/Theme/ThemeAction';
import { themeMode } from 'selectors/ThemeSelector';
import IStore from 'models/IStore';

const SwitchTheme = styled(Switch)`
  background-color: #575654;
  .ant-switch-inner {
    font-size: 16px;
  }
`;

const mapStateToProps = (state: IStore) => ({
  theme: themeMode(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleToggle: bindActionCreators(toggleTheme, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFormRedux = ConnectedProps<typeof connector> & ReturnType<typeof Object>;

const ToggleTheme: React.FC<PropsFormRedux> = ({ theme, handleToggle }) => {
  const mode = ['dark', 'light'];
  const handleChange = (checked: boolean) => handleToggle(mode[+checked]);

  return (
    <SwitchTheme
      checkedChildren={<SunnyIcon />}
      unCheckedChildren={<NightIcon fill="yellow" />}
      checked={theme === 'light'}
      onChange={handleChange}
    />
  );
};

export default connector(ToggleTheme) as React.ComponentType<PropsFormRedux>;
