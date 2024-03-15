import { CITIES } from '../const';
import { store } from '../store';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type City = {
  name: string;
  location: Location;
};

export type Cities = City[];

export type CityName = typeof CITIES[number];

export type Location = {
  lat: number;
  lng: number;
  zoom: number;
}

export type Point = {
  id: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  bedrooms: number;
  maxAdults: number;
  description: string;
  images: string[];
  host: Host;
  goods: string[];
};

export type Offers = Offer[];

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Reviews = Review[];
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
