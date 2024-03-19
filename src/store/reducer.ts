import { createReducer } from '@reduxjs/toolkit';

import { loadOffers, requireAuthorization, setCity, setError, setOffers, setSorting } from './action';
import { DEFAULT_CITY } from '../mocks/city';
import { AuthorizationStatus, SORTING_OPTIONS } from '../const';
import { offersSorting } from '../utils';
import { City, Offers } from '../types/types';

type InitialState = {
  city: City;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SORTING_OPTIONS.POPULAR,
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
