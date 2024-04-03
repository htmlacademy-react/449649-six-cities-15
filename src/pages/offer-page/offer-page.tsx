import { Navigate, useParams } from 'react-router-dom';
import { Offer } from '../../types/types';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviewsList/reviewsList';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offers-list';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import Avatar from '../../components/avatar/avatar';
import { getOffer, getOfferIsLoading, getOfferIsNotFound } from '../../store/offer-data/selectors';
import { getCity } from '../../store/offers-data/selectors';
import { getReviews } from '../../store/review-data/selectors';
import { getNearbyOffers } from '../../store/nearby-offers-data/selectors';
import { useFavorites } from '../../hooks/useFavorites';
import { setRatingStars } from '../../utils';

function OfferPage(): JSX.Element {
  const currentOffer = useAppSelector(getOffer);
  const city = useAppSelector(getCity);
  const reviews = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const isOfferNotFound = useAppSelector(getOfferIsNotFound);
  const isOfferDataLoading = useAppSelector(getOfferIsLoading);
  const dispatch = useAppDispatch();
  const params = useParams();
  const offerId = params.id;

  const { title, type, price, rating, bedrooms, maxAdults, isPremium, description, isFavorite, images, host, goods } = currentOffer || {};
  const favoriteStatus = isFavorite ? 0 : 1;
  const [selectedNearbyOffer, setselectedNearbyOffer] = useState<Offer | undefined>(undefined);

  const handleNearbyOfferHover = (nearbyOfferId: string) => {
    const nearbyOffer = nearbyOffers.find((offer) => offer.id === nearbyOfferId);
    setselectedNearbyOffer(nearbyOffer);
  };

  const handleBookmarkClick = useFavorites(offerId!, favoriteStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      dispatch(fetchNearbyOffersAction(offerId));
    }
  }, [dispatch, offerId]);

  if (isOfferNotFound) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        {isOfferDataLoading && <LoadingScreen />}
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images && images.slice(0, 6).map((url, id) => {
                const keyValue = `${id}-${url}`;
                return (
                  <div key={keyValue} className="offer__image-wrapper">
                    <img className="offer__image" src={url} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                  : null
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  onClick={() => handleBookmarkClick()}
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${setRatingStars(rating!)}` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                {
                  bedrooms !== undefined ?
                    <li className="offer__feature offer__feature--bedrooms">
                      {bedrooms} Bedrooms
                    </li>
                    : null
                }
                {
                  maxAdults !== undefined ?
                    <li className="offer__feature offer__feature--adults">
                      Max {maxAdults} adults
                    </li>
                    : null
                }
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {goods && (
                <div className="offer__inside">
                  <h2 className="offer__inside-title">Whats inside</h2>
                  <ul className="offer__inside-list">
                    {goods.map((good) => {
                      const keyValue = good;
                      return (<li key={keyValue} className="offer__inside-item">{good}</li>);
                    })}
                  </ul>
                </div>
              )}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  {host?.avatarUrl && (
                    <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <Avatar imageUrl={host.avatarUrl} width={74} height={74} alt="Host avatar" className='offer__avatar user__avatar' />
                    </div>
                  )}
                  {host?.name && (<span className="offer__user-name">{host.name}</span>)}
                  {host?.isPro && (<span className="offer__user-status">Pro</span>)}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} offerId={offerId} />
            </div>
          </div>
          <Map className='offer__map map' city={city} offers={nearbyOffers} currentOffer={currentOffer} selectedOffer={selectedNearbyOffer} />
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
