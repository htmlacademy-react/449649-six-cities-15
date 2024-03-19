import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';
import { AuthorizationStatus } from '../const';

export const setCity = createAction('SET_CITY', (city: City) => ({ payload: city, }));
export const setOffers = createAction('SET_OFFERS', (offers: Offers) => ({ payload: offers, }));
export const setSorting = createAction('SET_SORTING', (sortType: string) => ({ payload: sortType }));
export const setError = createAction<string | null>('SET_ERROR');
export const loadOffers = createAction('LOAD_OFFERS', (offers: Offers) => ({ payload: offers }));
export const requireAuthorization = createAction('REQUIRE_AUTHORIZATION', (status: AuthorizationStatus) => ({ payload: status }));
export const setOffersDataLoadingStatus = createAction<boolean>('SET_OFFERS_DATA_LOADING_STATUS');
