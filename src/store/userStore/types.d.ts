import { ActionType } from 'typesafe-actions';
import * as actions from './user.action.creators';

type IUser = {
  username: string;
  email: string;
}

type IUserState = {
  userData: IUser | undefined;
  loading: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
};

type IUserPayload = Partial<{
  errorMessage: string;
  userData: IUser;
  token: string;
}>;

type IUserActionType = ActionType<typeof actions>;

export { IUserState, IUserActionType, IUserPayload };