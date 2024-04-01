import { Offer } from '../../types/types';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import { getPreviewOptions } from '../../utils';

type OfferCardProps = {
  offer: Offer;
  setOfferCardHoverId?(id: string | null): void;
}

function OfferCard({ offer, setOfferCardHoverId }: OfferCardProps): JSX.Element {
  const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer;
  const favoriteStatus = isFavorite ? 0 : 1;
  const location = useLocation();
  const page = location.pathname.split('/')[1];
  const previewOptions = getPreviewOptions(page);
  const handleBookmarkClick = useFavorites(id, favoriteStatus);

  const handleMouseOver = () => {
    if (setOfferCardHoverId) {
      setOfferCardHoverId(id);
    }
  };

  const handleMouseOut = () => {
    if (setOfferCardHoverId) {
      setOfferCardHoverId(null);
    }
  };

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link key={offer.id} to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={previewOptions.width}
            height={previewOptions.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={() => handleBookmarkClick()}
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;