import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { Offer } from '../../types/types';
import OffersList from '../../components/offer-list/offers-list';
import { useState } from 'react';
import SortingForm from '../../components/sorting-form/sorting-form';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useApp';
import { getCity, getCityName, getOffersByCity } from '../../store/offers-data/selectors';
import { getOfferById } from '../../utils';

function MainPage(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offersByCity = useAppSelector(getOffersByCity);
  const cityName = useAppSelector(getCityName);
  const city = useAppSelector(getCity);

  const handleOfferHover = (offerId: string) => {
    setSelectedOffer(getOfferById(offerId, offersByCity));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index${offersByCity.length ? '' : ' page__main--index-empty'}`}>
        <CitiesTabs />
        <div className="cities">
          {offersByCity.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} {offersByCity.length === 1 ? 'place' : 'places'} to stay in {cityName}</b>
                <SortingForm />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={offersByCity} setOfferCardHoverId={handleOfferHover} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map className={'cities__map map'} city={city} offers={offersByCity} selectedOffer={selectedOffer} />
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {cityName}
                  </p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
