import { AuthorizationStatus, NameSpace } from '../../const';
import { State, User } from '../../types/types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
