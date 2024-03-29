import { City } from './types/types';

export const SORTING_OPTIONS = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const RATING_MAP = {
  'perfect': '5',
  'good': '4',
  'not bad': '3',
  'badly': '2',
  'terribly': '1'
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Comments = '/comments',
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Favorite = '/favorite'
}

export const DEFAULT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 12
  }
};

export enum UpdateSource {
  MainPage = 'UpdateFromMainPage',
  OfferPage = 'UpdateFromOfferPage',
  FavoritesPage = 'UpdateFromFavoritesPage',
  NearbyOffersPage = 'UpdateFromNearbyOffersPage',
}

export const OfferCardParams = {
  mainPage: {
    width: 260,
    height: 200,
    updateSource: UpdateSource.MainPage
  },
  favoritePage: {
    width: 150,
    height: 110,
    updateSource: UpdateSource.FavoritesPage
  },
  offerPage: {
    width: 260,
    height: 200,
    updateSource: UpdateSource.OfferPage
  },
  nearbyOffersPage: {
    width: 260,
    height: 200,
    updateSource: UpdateSource.NearbyOffersPage
  }
};

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  NearbyOffers = 'OFFERSNEARBY',
  FavoriteOffers = 'FAVORITEOFFERS',
  ErrorMessage = 'ERRORMESSAGE'
}
