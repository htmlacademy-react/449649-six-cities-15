import { City } from './city';
import { Location } from './location';
import { Host } from './host';

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
