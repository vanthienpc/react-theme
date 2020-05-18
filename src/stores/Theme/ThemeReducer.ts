import { handleActions, ReducerMap } from 'redux-actions';
import * as ThemeAction from './ThemeAction';
import { IThemeState } from './models/IThemeState';

const initialState: IThemeState = {
  mode: 'light',
};

const reducerMap: ReducerMap<IThemeState, string> = {
  [ThemeAction.TOGGLE_THEME]: (state, { payload }): IThemeState => ({ ...state, mode: payload }),
};

export default handleActions(reducerMap, initialState, { prefix: '@@theme' });
