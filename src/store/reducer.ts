import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';

import { loadOffers, setCity, setOffers, setSorting } from './action';
import { DEFAULT_CITY } from '../mocks/city';
import { SORTING_OPTIONS } from '../const';
import { offersSorting } from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  offers: OFFERS,
  sortType: SORTING_OPTIONS.POPULAR
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
    });
});

export { reducer };
