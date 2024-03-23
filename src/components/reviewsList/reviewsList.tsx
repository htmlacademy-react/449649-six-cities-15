import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useApp';
import { Reviews } from '../../types/types';
import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review/review';

type ReviewsProps = {
  offerId?: string;
  reviews: Reviews;
};

function ReviewsList({ offerId, reviews }: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<ReviewItem key={review.id} review={review} />))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (<CommentForm offerId={offerId}/>)}
    </section>
  );
}

export default ReviewsList;
