import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { Offer } from '../../types/types';
import OffersList from '../../components/offer-list/offers-list';
import { useState } from 'react';
import SortingForm from '../../components/sorting-form/sorting-form';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useApp';
import { getOfferById, getOffersByCity } from '../../store/selectors';
import { CITIES } from '../../mocks/city';

function MainPage(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => getOffersByCity(city, state.offers));

  const handleOfferHover = (offerId: string) => {
    setSelectedOffer(getOfferById(offerId, offers));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CitiesTabs cities={CITIES} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
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
