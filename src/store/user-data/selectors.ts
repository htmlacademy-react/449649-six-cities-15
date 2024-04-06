import { AuthorizationStatus, NameSpace } from '../../const';
import { State, UserData } from '../../types/types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
