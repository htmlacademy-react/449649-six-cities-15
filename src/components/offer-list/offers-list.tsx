import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/types';
import { useLocation } from 'react-router-dom';

type OffersListProps = {
  offers: Offers;
  setOfferCardHoverId(id: string | null): void;
}

function OffersList({ offers, setOfferCardHoverId }: OffersListProps): JSX.Element {
  const currentPage = useLocation();
  const isOfferPage = currentPage.pathname.includes('offer');

  return (
    <div className={`places__list ${isOfferPage ? 'cities__places-list tabs__content' : 'near-places__list'}`}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setOfferCardHoverId={setOfferCardHoverId} />
      ))}
    </div>
  );
}

export default OffersList;
