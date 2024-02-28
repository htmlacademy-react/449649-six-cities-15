import { Reviews } from '../../types/review';
import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review/review';

type ReviewsProps = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<ReviewItem key={review.id} review={review} />))}
      </ul>
      <CommentForm />
    </section>
  );
}

export default ReviewsList;
