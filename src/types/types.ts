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
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  id: string;
  title: string;
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
