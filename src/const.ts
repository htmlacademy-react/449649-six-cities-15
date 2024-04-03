import { City } from './types/types';

export const SORTING_OPTIONS = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export const TIMEOUT_SHOW_ERROR = 2000;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const RATING_MAP = {
  'perfect': '5',
  'good': '4',
  'not bad': '3',
  'badly': '2',
  'terribly': '1'
};

export const RATING = [
  {value: 5, name: 'perfect'},
  {value: 4, name: 'good'},
  {value: 3, name: 'not bad'},
  {value: 2, name: 'badly'},
  {value: 1, name: 'terribly'}
];

export const REVIEW_INITIAL_STATE = {
  rating: 0,
  comment: ''
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

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  NearbyOffers = 'OFFERS_NEARBY',
  FavoriteOffers = 'FAVORITE_OFFERS',
  ErrorMessage = 'ERROR_MESSAGE'
}

export enum FetchStatus {
  Loading = 'loading',
  Rejected ='rejected',
  None = 'none',
}
