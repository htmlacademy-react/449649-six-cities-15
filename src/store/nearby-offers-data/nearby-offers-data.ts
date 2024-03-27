import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { NearbyOffersData } from '../../types/types';
import { fetchNearbyOffersAction } from '../api-actions';

const initialState: NearbyOffersData = {
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  IsNearbyOffersNotFound: false,
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoading = true;
        state.IsNearbyOffersNotFound = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        const offersNearbyData = action.payload;

        if (offersNearbyData !== undefined && offersNearbyData !== null) {
          state.nearbyOffers = offersNearbyData;
        }

        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
        state.IsNearbyOffersNotFound = true;
      });
  },
});

