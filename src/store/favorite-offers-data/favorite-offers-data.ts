import { createSlice } from '@reduxjs/toolkit';
import { FavoriteOffersData } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchFavoritesOffersAction, setFavoriteAction } from '../api-actions';

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
      .addCase(fetchFavoritesOffersAction.pending, (state) => {
        state.isFavoriteOffersLoading = true;
        state.isFavoriteOffersNotFound = false;
      })
      .addCase(fetchFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersNotFound = false;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoritesOffersAction.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
        state.isFavoriteOffersNotFound = true;
      })
      .addCase(setFavoriteAction.fulfilled, (state, action) => {
        const offerFavoriteData = action.payload;
        if (offerFavoriteData?.isFavorite) {
          state.favoriteOffers.push(offerFavoriteData);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter(
            (item) => item.id !== offerFavoriteData.id
          );
        }
      });
  }
});
