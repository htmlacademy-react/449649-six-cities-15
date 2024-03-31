import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, Comment, FavoriteStatusData, Offer, Offers, Review, Reviews, State, UserAuth } from '../types/types';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, UpdateSource } from '../const';
import { redirectToRoute } from './action';
import { setFavoriteOffer } from './offer-data/offer-data';
import { setFavoriteOffers } from './offers-data/offers-data';
import { setFavoriteFromNearby } from './nearby-offers-data/nearby-offers-data';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  Offer,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffer', async (_arg, { extra: api }) => {
  const id = _arg;
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'fetchReviews', async (_arg, { extra: api }) => {
      const id = _arg;
      const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      return data;
    });

export const fetchNearbyOffersAction = createAsyncThunk<
  Offers,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffersNearby', async (_arg, { extra: api }) => {
  const id = _arg;

  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);

  return data;
});

export const submitCommentAction = createAsyncThunk<
  Review,
  Comment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('submitComment', async ({ id, comment, rating }, { extra: api }) => {
  const { data } = await api.post<Review>(`${APIRoute.Comments}/${id}`, {
    comment: comment,
    rating: rating,
  });

  return data;
});

export const fetchFavoritesOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchFavorites', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Favorite);
  return data;
});

export const setFavoriteAction = createAsyncThunk<
  Offer,
  FavoriteStatusData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('setFavorites', async (params: FavoriteStatusData, { dispatch, extra: api }) => {
  const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${params.offerId}/${params.status}`);

  switch (params.sourceUpdate) {
    case UpdateSource.MainPage:
      dispatch(setFavoriteOffers(data));
      //отрисовать в стете
      break;
    case UpdateSource.OfferPage:
      dispatch(setFavoriteOffer(data.isFavorite));
      dispatch(setFavoriteOffers(data));
      dispatch(setFavoriteFromNearby(data));
      dispatch(fetchFavoritesOffersAction());
      break;
    case UpdateSource.FavoritesPage:
      dispatch(setFavoriteOffers(data));
      dispatch(setFavoriteOffer(data.isFavorite));
      dispatch(setFavoriteFromNearby(data));
      dispatch(fetchFavoritesOffersAction());
      break;
    case UpdateSource.NearbyOffersPage:
      dispatch(setFavoriteFromNearby(data));
      dispatch(fetchFavoritesOffersAction());
      break;
  }

  return data;
}
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('checkAuth', async (_arg, { extra: api }) => await api.get(APIRoute.Login));

export const loginAction = createAsyncThunk<UserAuth, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserAuth>(APIRoute.Login, { email, password });
  const { token } = data;
  saveToken(token);
  dispatch(redirectToRoute(AppRoute.Main));

  return data;
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
