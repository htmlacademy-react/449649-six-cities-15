import { Review } from '../../types/types';
import Avatar from '../avatar/avatar';

type ReviewProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewProps): JSX.Element {
  const { comment, user, rating, date } = review;
  const { name, avatarUrl } = user;
  const dueDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <Avatar imageUrl={avatarUrl} width={74} height={74} alt="Host avatar" className='reviews__avatar user__avatar' />
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={new Date(date).toISOString()}>
          {dueDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
