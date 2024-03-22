import { createAction } from '@reduxjs/toolkit';
import { City, Offer, Offers, Reviews, UserData } from '../types/types';
import { AppRoute, AuthorizationStatus } from '../const';

export const loadOffers = createAction('LOAD_OFFERS', (offers: Offers) => ({ payload: offers }));
export const loadOffer = createAction('LOAD_OFFER', (offer: Offer) => ({ payload: offer }));
export const loadReviews = createAction('ADD_REVIEWS', (reviews: Reviews) => ({ payload: reviews }));
export const requireAuthorization = createAction('REQUIRE_AUTHORIZATION', (status: AuthorizationStatus) => ({ payload: status }));
export const redirectToRoute = createAction<AppRoute>('REDIRECT_TO_ROUTE');
export const setCity = createAction('SET_CITY', (city: City) => ({ payload: city, }));
export const setUser = createAction('SET_USER', (user: UserData) => ({ payload: user, }));
export const setOffers = createAction('SET_OFFERS', (offers: Offers) => ({ payload: offers, }));
export const setSorting = createAction('SET_SORTING', (sortType: string) => ({ payload: sortType }));
export const setError = createAction<string | null>('SET_ERROR');
export const setOffersDataLoadingStatus = createAction<boolean>('SET_OFFERS_DATA_LOADING_STATUS');
export const setOfferDataLoadingStatus = createAction<boolean>('SET_OFFER_DATA_LOADING_STATUS');
