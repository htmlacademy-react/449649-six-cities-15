import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { DEFAULT_CITY } from './mocks/city';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Setting.PlacesCount}
        city={DEFAULT_CITY}
        offers={OFFERS}
        reviews={REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
);
