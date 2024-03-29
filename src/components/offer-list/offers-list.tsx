import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/types';

type OffersListProps = {
  offers: Offers;
  setOfferCardHoverId(id: string | null): void;
}

function OffersList({ offers, setOfferCardHoverId }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} page={'mainPage'} offer={offer} setOfferCardHoverId={setOfferCardHoverId} />
      ))}
    </div>
  );
}


export default OffersList;
