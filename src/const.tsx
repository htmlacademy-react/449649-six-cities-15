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

export { Setting, CITIES, USER_INFO, AppRoute, AuthorizationStatus };
