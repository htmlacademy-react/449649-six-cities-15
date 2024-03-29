import { Cities, City, Offer, Offers } from './types/types';
import { SORTING_OPTIONS } from './const';

export function offersSorting(type: string, list: Offers) {
  switch (type) {
    case SORTING_OPTIONS.PRICE_LOW_TO_HIGH:
      return list.sort((a, b) => a.price - b.price);
    case SORTING_OPTIONS.PRICE_HIGH_TO_LOW:
      return list.sort((a, b) => b.price - a.price);
    case SORTING_OPTIONS.TOP_RATED_FIRST:
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}

export const getOfferById = (offerId: string, offers: Offers): Offer | undefined => offers.find((offer) => offer.id === offerId);

export function getCitiesNames(offers: Offers) {
  const cityNamesSet = new Set<string>();
  offers.forEach((offer) => {
    cityNamesSet.add(offer.city.name);
  });

  return cityNamesSet;
}

export function getCitiesFromOffers(offers: Offers): Cities {
  const citiesSet: Set<City> = new Set();
  offers.forEach((offer) => {
    citiesSet.add(offer.city);
  });

  return Array.from(citiesSet);
}

export function getOffersByCity(offers: Offers, city: City): Offers {
  return offers.filter((offer) => offer.city.name === city.name);
}
