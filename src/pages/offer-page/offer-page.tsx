import { useParams } from 'react-router-dom';
import { City, Offer, Offers, Reviews } from '../../types/types';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviewsList/reviewsList';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offers-list';
import { useState } from 'react';

type OfferPageProps = {
  city: City;
  offers: Offers;
  reviews: Reviews;
};

function OfferPage({ city, offers, reviews }: OfferPageProps): JSX.Element {
  const params = useParams();
  const selectedOffer = offers.filter((offer) => offer.id === params.id)[0];
  const { title, type, price, rating, bedrooms, maxAdults, isPremium, description, images, host, goods } = selectedOffer;
  const { name, isPro, avatarUrl } = host;
  const nearbyOffers = offers.filter((offer) => offer.id !== selectedOffer.id);

  const [selectedNearbyOffer, setselectedNearbyOffer] = useState<Offer | undefined>(undefined);

  const handleNearbyOfferHover = (offerId: string) => {
    const nearbyOffer = nearbyOffers.find((offer) => offer.id === offerId);
    setselectedNearbyOffer(nearbyOffer);
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                {images.map((url, id) => {
                  const keyValue = `${id}-${url}`;
                  return (
                    <img key={keyValue} className="offer__image" src={url} alt="Photo studio" />
                  );
                })}
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                {isPremium && <span>Premium</span>}
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms}</li>
                <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => {
                    const keyValue = good;
                    return (<li key={keyValue} className="offer__inside-item">{good}</li>);
                  })}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  <span className="offer__user-status">{isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <Map className='offer__map map' city={city} offers={nearbyOffers} selectedOffer={selectedNearbyOffer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearbyOffers} setOfferCardHoverId={handleNearbyOfferHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
