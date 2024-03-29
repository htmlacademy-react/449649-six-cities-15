import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useApp';
import { setCity, setCityName, setOffersByCity } from '../../store/offers-data/offers-data';
import { City, Offers } from '../../types/types';
import OfferCard from '../offer-card/offer-card';
import { getCityByName } from '../../utils';

type FavoritesCardListProps = {
  city: string;
  offersByCity: Offers;
}

function FavoriteOffersList({ city, offersByCity }: FavoritesCardListProps) {

  const dispatch = useAppDispatch();
  const currentCity = getCityByName(city, offersByCity);

  function handleCityButtonClick(chosenCity: City) {
    dispatch(setCityName(chosenCity.name));
    dispatch(setCity(chosenCity));
    dispatch(setOffersByCity());
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {currentCity && (
            <Link className="locations__item-link" to={AppRoute.Main} onClick={() => handleCityButtonClick(currentCity)}>
              <span>{currentCity.name}</span>
            </Link>
          )}
        </div>
      </div>
      <div className="favorites__places">
        {!!offersByCity.length &&
          offersByCity.map((offer) => (
            <OfferCard
              key={offer.id}
              page={'favoritePage'}
              offer={offer}
            />
          ))}
      </div>
    </li>
  );
}

export default FavoriteOffersList;
