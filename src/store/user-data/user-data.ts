import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { getToken } from '../../services/token';
import { UserData, UserProcess } from '../../types/types'; // Import UserData type
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const token = getToken();
const initialState: UserProcess = {
  authorizationStatus: token ? AuthorizationStatus.Auth : AuthorizationStatus.Unknown,
  user: null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        const userData = action.payload;

        state.authorizationStatus = AuthorizationStatus.Auth;

        if (userData !== undefined && userData !== null) {
          state.user = userData as UserData;
        }
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
