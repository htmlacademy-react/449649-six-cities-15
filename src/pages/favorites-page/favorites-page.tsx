import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import { getFavoriteOffers, getIsFavoritesIsNotFound, getIsFavoritesLoading } from '../../store/favorite-offers-data/selectors';
import { useEffect } from 'react';
import { fetchFavoritesOffersAction } from '../../store/api-actions';
import FavoriteOffersList from '../../components/favorite-offers-list/favorite-offers-list';
import { groupOffersByCity } from '../../utils';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const isFavoritesNotFound = useAppSelector(getIsFavoritesIsNotFound);
  const offersByCity = groupOffersByCity(favoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        {isFavoritesLoading && <LoadingScreen />}
        {isFavoritesNotFound ? (
          <FavoritesEmptyPage />
        ) : (
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersByCity).map(([cityName, offers]) => (
                  <FavoriteOffersList
                    key={cityName}
                    city={cityName}
                    offersByCity={offers}
                  />
                ))}
              </ul>
            </section>
          </div>
        )}
      </main >
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div >
  );
}

export default FavoritesPage;
