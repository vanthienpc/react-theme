import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import IStore from 'models/IStore';
import ThemeReducer from './Theme/ThemeReducer';

const rootReducer = (history: History): Reducer<IStore> =>
  combineReducers({
    router: connectRouter(history) as any,
    theme: ThemeReducer,
  } as ReducersMapObject<IStore>);

export default rootReducer;
