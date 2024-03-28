import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import { getFavoriteOffers, getIsFavoritesIsNotFound, getIsFavoritesLoading } from '../../store/favorite-offers-data/selectors';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const isFavoritesNotFound = useAppSelector(getIsFavoritesIsNotFound);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
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
                {
                  favoriteOffers.map((offer) => (
                    <li className="favorites__locations-items" key={offer.id}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={`/offer/${offer.id}`}>
                            <span>{offer.city.name}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <article className="favorites__card place-card">
                          {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                            </a>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">&euro;{offer.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp;night</span>
                              </div>
                              <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                  <use xlinkHref="#icon-bookmark"></use>
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{ width: `${offer.rating * 20}%` }} />
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <a href="#">{offer.title}</a>
                            </h2>
                            <p className="place-card__type">{offer.type}</p>
                          </div>
                        </article>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        )}
      </main>
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
    </div>
  );
}

export default FavoritesPage;
