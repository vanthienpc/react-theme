import { createActions } from 'redux-actions';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const { toggleTheme } = createActions(TOGGLE_THEME, { prefix: '@@theme' });
