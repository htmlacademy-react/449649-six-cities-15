import { createReducer } from '@reduxjs/toolkit';

import { loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, setCity, setError, setOfferDataLoadingStatus, setOfferIsNotFound, setOffers, setOffersDataLoadingStatus, setSorting, setUser } from './action';
import { AuthorizationStatus, SORTING_OPTIONS, DEFAULT_CITY } from '../const';
import { offersSorting } from '../utils';
import { City, Offer, Offers, Reviews, UserData } from '../types/types';

type InitialState = {
  city: City;
  offers: Offers;
  offer: Offer | null;
  reviews: Reviews;
  nearbyOffers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  isOfferNotFound: boolean;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  sortType: SORTING_OPTIONS.POPULAR,
  authorizationStatus: AuthorizationStatus.Auth,
  user: null,
  isOfferNotFound: false,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sortType = action.payload;
      state.offers = offersSorting(state.sortType, state.offers);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOfferIsNotFound, (state, action) => {
      state.isOfferNotFound = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
