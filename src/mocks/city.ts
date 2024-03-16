import { City } from '../types/types';

export const DEFAULT_CITY: City = {
  name: 'Paris',
  location: {
    lat: 48.8566,
    lng: 2.3522,
    zoom: 10
  }
};

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      lat: 50.9375,
      lng: 6.9603,
      zoom: 10
    }
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.8503,
      lng: 4.3517,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.373100,
      lng: 4.893300,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.5511,
      lng: 9.9937,
      zoom: 10
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 51.2277,
      lng: 6.7735,
      zoom: 10
    }
  }
];
