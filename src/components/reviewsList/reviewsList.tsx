import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useApp';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { Reviews } from '../../types/types';
import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review/review';

type ReviewsProps = {
  offerId?: string;
  reviews: Reviews;
};

function ReviewsList({ offerId, reviews }: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews ? reviews.length : 0}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<ReviewItem key={review.id} review={review} />))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (<CommentForm offerId={offerId} />)}
    </section>
  );
}

export default ReviewsList;
