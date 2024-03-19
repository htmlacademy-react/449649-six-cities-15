import { createReducer } from '@reduxjs/toolkit';

import { loadOffers, requireAuthorization, setCity, setOffers, setSorting } from './action';
import { DEFAULT_CITY } from '../mocks/city';
import { AuthorizationStatus, SORTING_OPTIONS } from '../const';
import { offersSorting } from '../utils';
import { City, Offers } from '../types/types';

type InitialState = {
  city: City;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SORTING_OPTIONS.POPULAR,
  authorizationStatus: AuthorizationStatus.NoAuth
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
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
