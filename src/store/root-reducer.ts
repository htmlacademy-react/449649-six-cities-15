import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offers } from './offers-data/offers-data';
import { errorMessage } from './error-data/error-data';
import { user } from './user-data/user-data';
import { offer } from './offer-data/offer-data';
import { reviews } from './review-data/review-data';
import { nearbyOffers } from './nearby-offers-data/nearby-offers-data';
import { favoritesOffer } from './favorite-offers-data/favorite-offers-data';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.NearbyOffers]: nearbyOffers.reducer,
  [NameSpace.FavoriteOffers]: favoritesOffer.reducer,
  [NameSpace.ErrorMessage]: errorMessage.reducer,
});
