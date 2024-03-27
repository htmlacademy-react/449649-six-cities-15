import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchOfferAction } from '../api-actions';
import { OfferData } from '../../types/types';

const initialState: OfferData = {
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false,
};

export const offer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerIsLoading = true;
        state.offerIsNotFound = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const offerData = action.payload;

        if (offerData !== undefined && offerData !== null) {
          state.offer = offerData;
        }

        state.offerIsLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerIsLoading = false;
        state.offerIsNotFound = true;
      });
  },
});
