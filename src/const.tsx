const Setting = {
  PlacesCount: 312
};

const USER_INFO = {
  userName: 'Oliver.conner@gmail.com',
  favoriteCount: 3
};

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

export { Setting, CITIES, USER_INFO, RATING_MAP, AppRoute, AuthorizationStatus };
