import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';

export const setCity = createAction('SET_CITY', (city: City) => ({ payload: city, }));
export const setOffers = createAction('SET_OFFERS', (offers: Offers) => ({ payload: offers, }));
