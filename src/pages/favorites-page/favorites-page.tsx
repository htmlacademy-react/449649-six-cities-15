import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApp';
import { getOffers } from '../../store/offers-data/selectors';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getOffers);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoriteOffers.map((card) => (

                  <li className="favorites__locations-items" key={card.id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={`/offer/${card.id}`}>
                          <span>{card.city.name}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <article className="favorites__card place-card">

                        {card.isPremium && <div className="place-card__mark"><span>Premium</span></div>}

                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src={card.previewImage} width="150" height="110" alt="Place image" />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{card.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button className={`place-card__bookmark-button button ${card.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: `${card.rating * 20}%` }} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href="#">{card.title}</a>
                          </h2>
                          <p className="place-card__type">{card.type}</p>
                        </div>
                      </article>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
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
