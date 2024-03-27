import { NameSpace } from '../../const';
import { Offer, Offers, State } from '../../types/types';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getOfferIsLoading = (state: State): boolean => state[NameSpace.Offer].offerIsLoading;
export const getOfferIsNotFound = (state: State): boolean => state[NameSpace.Offer].offerIsNotFound;
export const getOfferById = (offerId: string, offers: Offers): Offer | undefined => offers.find((offer) => offer.id === offerId);
