import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/types';

type OffersListProps = {
  offers: Offers;
  setOfferCardHoverId(id: string | null): void;
}

function OffersList({ offers, setOfferCardHoverId }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;
        return (
          <OfferCard key={keyValue} offer={offer} setOfferCardHoverId={setOfferCardHoverId} />
        );
      })}
    </div>
  );
}

export default OffersList;
