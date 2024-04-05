import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData, UserProcess } from '../../types/types'; // Import UserData type
import { checkAuthAction, fetchFavoritesOffersAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    assignauthorizationStatusByDefault: (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        const userData = action.payload;

        if (userData !== undefined && userData !== null) {
          state.user = userData;
        }
        state.authorizationStatus = AuthorizationStatus.Auth;
        fetchFavoritesOffersAction();
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

export const { assignauthorizationStatusByDefault } = user.actions;
