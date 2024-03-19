const USER_INFO = {
  userName: 'Oliver.conner@gmail.com',
  favoriteCount: 3
};

const SORTING_OPTIONS = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

const TIMEOUT_SHOW_ERROR = 2000;

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const RATING_MAP = {
  'perfect': '5',
  'good': '4',
  'not bad': '3',
  'badly': '2',
  'terribly': '1'
};

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export { SORTING_OPTIONS, TIMEOUT_SHOW_ERROR, CITIES, USER_INFO, RATING_MAP, AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
