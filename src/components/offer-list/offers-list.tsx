import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/types';
import { OfferCardParams } from '../../const';

type OffersListProps = {
  offers: Offers;
  page: keyof typeof OfferCardParams;
  setOfferCardHoverId(id: string | null): void;
}

function OffersList({ offers, page, setOfferCardHoverId }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} page={page} offer={offer} setOfferCardHoverId={setOfferCardHoverId} />
      ))}
    </div>
  );
}


export default OffersList;
