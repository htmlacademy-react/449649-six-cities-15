import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { NearbyOffersData, Offer } from '../../types/types';
import { fetchNearbyOffersAction } from '../api-actions';

const initialState: NearbyOffersData = {
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  IsNearbyOffersNotFound: false,
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    setFavoriteFromNearby(state, action: PayloadAction<Offer>) {
      const nearbyFavorite = action.payload;

      state.nearbyOffers = state.nearbyOffers.map((item: Offer) =>
        item.id === nearbyFavorite.id ? nearbyFavorite : item
      );
    },
  },
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

export const { setFavoriteFromNearby } = nearbyOffers.actions;

