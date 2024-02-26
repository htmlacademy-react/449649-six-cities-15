import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { Offers } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { useState } from 'react';
import SortingForm from '../../components/sorting-form/sorting-form';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
}

function MainPage({ placesCount, offers }: MainPageProps): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CitiesTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <SortingForm />
              <div className="cities__places-list places__list tabs__content">
                <CitiesList offers={offers} setCityCardHoverId={setCardHoverId} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">{cardHoverId}</section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
