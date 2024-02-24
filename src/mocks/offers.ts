import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '2de453aa-9e81-4e1b-b48c-9e14f4d8e4ce',
    title: 'Cozy countryside house with garden',
    type: 'house',
    price: 200,
    city: {
      name: 'London',
      location: {
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
      }
    },
    location: {
      latitude: 51.5171,
      longitude: -0.1062,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    description: 'Escape the city and enjoy the tranquility of this charming countryside house.',
    bedrooms: 2,
    goods: [
      'Garden',
      'Parking'
    ],
    host: {
      name: 'Emily Johnson',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    maxAdults: 6,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '17bd4e2d-8dbb-4f2e-ba8f-6a1f8d219a2d',
    title: 'Modern loft in downtown',
    type: 'apartment',
    price: 180,
    city: {
      name: 'New York',
      location: {
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 10
      }
    },
    location: {
      latitude: 40.7243,
      longitude: -74.0018,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    description: 'Experience the vibrant energy of New York from this stylish and centrally-located loft.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Elevator'
    ],
    host: {
      name: 'Michael Smith',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 'f26a845c-7c11-4b2c-8f78-02c2389e9717',
    title: 'Charming beachfront villa with private pool',
    type: 'villa',
    price: 350,
    city: {
      name: 'Bali',
      location: {
        latitude: -8.409518,
        longitude: 115.188919,
        zoom: 10
      }
    },
    location: {
      latitude: -8.694798,
      longitude: 115.259321,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'Indulge in luxury and relaxation at this stunning beachfront villa with breathtaking ocean views.',
    bedrooms: 4,
    goods: [
      'Private pool',
      'Beach access',
      'Air conditioning'
    ],
    host: {
      name: 'Sophia Anderson',
      isPro: true,
      avatarUrl: 'img/avatar-max.jpg'
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg'
    ],
    maxAdults: 8,
    previewImage: 'img/apartment-03.jpg'
  }
];
