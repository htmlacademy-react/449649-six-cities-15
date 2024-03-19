import { City, Offers } from '../types/types';

export const getOfferById = (offerId: string, offers: Offers) => offers.find((i) => i.id === offerId);
export const getOffersByCity = (city: City, offers: Offers) => offers.filter((i) => i.city.name === city.name);
export const getFavoriteOffers = (offers: Offers) => offers.filter((i) => i.isFavorite);
export const getCitiesFromOffers = (offers: Offers): City[] => {
  const uniqueCities: { [key: string]: City } = {};
  offers.forEach((offer) => {
    uniqueCities[offer.city.name] = offer.city;
  });

  return Object.values(uniqueCities);
};
