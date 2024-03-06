import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { POINTS } from './mocks/points';
import { CITY } from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      city={CITY}
      offers={OFFERS}
      reviews={REVIEWS}
      points={POINTS}
    />
  </React.StrictMode>,
);
