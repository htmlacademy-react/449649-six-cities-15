import { createSlice } from '@reduxjs/toolkit';
import { FavoriteOffersData } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchFavoritesAction } from '../api-actions';

const initialState: FavoriteOffersData = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  isFavoriteOffersNotFound: false,
};

export const favoritesOffer = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoriteOffersLoading = true;
        state.isFavoriteOffersNotFound = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const offerFavoriteData = action.payload;

        if (offerFavoriteData.length > 0) {
          state.favoriteOffers = offerFavoriteData;
        } else {
          state.isFavoriteOffersNotFound = true;
        }

        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
        state.isFavoriteOffersNotFound = true;
      });
  },
});
