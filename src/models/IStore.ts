import { RouterState } from 'connected-react-router';
import { IThemeState } from 'stores/Theme/models/IThemeState';

export default interface IStore {
  readonly router: RouterState;
  readonly theme: IThemeState;
}
