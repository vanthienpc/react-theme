import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { MenuMode } from 'antd/lib/menu';
import { useWindowWidth } from 'utilities/HocUtility';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import ToggleTheme from '../ToggleTheme';

const MENU: MenuItemProps[] = [
  {
    title: 'Become a host',
  },
  {
    title: 'Help',
  },
  {
    title: 'Sign up',
  },
  {
    title: 'Log in',
  },
];

const MenuIcon = styled(MenuOutlined)`
  color: #ffffff;
  font-size: 22px;
`;

interface IMainMenu {
  mode: MenuMode;
}

const MainMenu: React.FC<IMainMenu> = ({ mode }) => (
  <Menu mode={mode}>
    <Menu.Item key={uuidv4()}>
      <ToggleTheme />
    </Menu.Item>
    {MENU.map((item: MenuItemProps) => (
      <Menu.Item key={uuidv4()}>{item.title}</Menu.Item>
    ))}
  </Menu>
);

const DesktopMenu: React.FC = () => <MainMenu mode="horizontal" />;

const MobileMenu: React.FC = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <React.Fragment>
      <MenuIcon onClick={handleToggleMenu} />
      <Drawer closable placement="right" visible={toggleMenu} onClose={handleToggleMenu}>
        <MainMenu mode="vertical" />
      </Drawer>
    </React.Fragment>
  );
};

const AppMenu: React.FC = () => {
  const isMobile = useWindowWidth() <= 768;
  return isMobile ? <MobileMenu /> : <DesktopMenu />;
};

export default AppMenu;
