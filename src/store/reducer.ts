import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';

import { setCity, setOffers } from './action';
import { DEFAULT_CITY } from '../mocks/city';

const initialState = {
  city: DEFAULT_CITY,
  offers: OFFERS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
export { reducer };
