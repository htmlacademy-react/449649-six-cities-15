import CityCard from '../city-card/city-card';
import { Offers } from '../../types/offer';

type CitiesListProps = {
  offers: Offers;
  setCityCardHoverId(id: string | null): void;
}

function CitiesList({ offers, setCityCardHoverId }: CitiesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;
        return (
          <CityCard key={keyValue} offer={offer} setCityCardHoverId={setCityCardHoverId} />
        );
      })}
    </div>
  );
}

export default CitiesList;
