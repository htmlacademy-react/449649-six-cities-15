import { NameSpace } from '../../const';
import { Offers, State } from '../../types/types';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersLoading;
export const getIsFavoritesIsNotFound = (state: State): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersNotFound;
