import WebFontLoader from 'webfontloader';
import { createGlobalStyle, keyframes } from 'styled-components';

WebFontLoader.load({
  google: {
    families: ['IBM Plex Sans Condensed:400,500,600,700'],
  },
});

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const GlobalStyled = createGlobalStyle<{ theme: any }>`
  body {
    font-family: 'IBM Plex Sans Condensed', serif;
    background-color: #f0f2f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .ant-layout {
    height: 100vh;
    animation: ${fadeInAnimation} ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .ant-layout-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    background: transparent;
  }

  .ant-menu {
    border: none;
    font-size: 16px;
    font-weight: 600;
    background: transparent;
  }

  .ant-menu-horizontal {
    color: #ffffff;
  }

  .ant-menu-vertical {
    color: ${({ theme }) => theme.color};
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu-item-selected {
    border-color: transparent !important;
  }

  .ant-list,
  .ant-empty {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.bgSuggestion};
  }

  .ant-empty {
    margin: 0;
    padding: 32px 0;
  }

  .ant-list-split .ant-list-item {
    border-color: transparent;
  }

  .ant-drawer-content {
    background: ${({ theme }) => theme.bgSuggestion}
  }

  .ant-drawer-close {
    color: ${({ theme }) => theme.color};
  }
`;
