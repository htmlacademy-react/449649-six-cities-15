import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { Offers, Offer, City } from '../../types/types';
import OffersList from '../../components/offer-list/offers-list';
import { useState } from 'react';
import SortingForm from '../../components/sorting-form/sorting-form';
import Map from '../../components/map/map';

type MainPageProps = {
  placesCount: number;
  city: City;
  offers: Offers;
}

function MainPage({ placesCount, city, offers }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleOfferHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

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
                <OffersList offers={offers} setOfferCardHoverId={handleOfferHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map map'} city={city} offers={offers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
