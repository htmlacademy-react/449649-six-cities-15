import { AxiosInstance, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, Comment, Offer, Offers, Reviews, State, UserData } from '../types/types';
import { loadReviews, loadOffer, loadOffers, redirectToRoute, requireAuthorization, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setUser, loadNearbyOffers } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const { data } = await api.get<Offers>(APIRoute.Offers);
      dispatch(loadOffers(data));
      dispatch(setOffersDataLoadingStatus(false));
    } catch (err: unknown) {
      const errResponse: AxiosError = err as AxiosError;
      dispatch(setError(errResponse.message));
    }
  },
);

export const fetchOfferAction = createAsyncThunk<
  void,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffer',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setOfferDataLoadingStatus(true));
      const id = _arg;
      try {
        const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
        dispatch(setOfferDataLoadingStatus(false));
        dispatch(loadOffer(data));
      } catch (err: unknown) {
        const errResponse: AxiosError = err as AxiosError;
        dispatch(setError(errResponse.message));
      }
    },
  );

export const fetchReviewsAction = createAsyncThunk<
  void,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchReviews',
    async (_arg, { dispatch, extra: api }) => {
      try {
        const id = _arg;
        const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
        dispatch(loadReviews(data));
      } catch (err: unknown) {
        const errResponse: AxiosError = err as AxiosError;
        dispatch(setError(errResponse.message));
      }
    });

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'fetchNearbyOffers', async (_arg, { dispatch, extra: api }) => {
      const id = _arg;

      try {
        const { data } = await api.get<Offers>(
          `${APIRoute.Offers}/${id}/nearby`
        );

        if (data) {
          dispatch(loadNearbyOffers(data));
        }
      } catch (err: unknown) {
        const errResponse: AxiosError = err as AxiosError;
        dispatch(setError(errResponse.message));
      }
    });

export const submitCommentAction = createAsyncThunk<
  void,
  Comment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'submitReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Comment>(`${APIRoute.Comments}/${id}`, {
      comment: comment,
      rating: rating,
    });

    dispatch(fetchReviewsAction(id));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      const { token } = data;
      saveToken(token);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (err: unknown) {
      const errResponse: AxiosError = err as AxiosError;
      dispatch(setError(errResponse.message));
      dispatch(redirectToRoute(AppRoute.Login));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Login));
  },
);
