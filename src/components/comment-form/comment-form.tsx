import { useState, Fragment, FormEvent, useEffect } from 'react';
import { FetchStatus, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RATING, REVIEW_INITIAL_STATE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { submitCommentAction } from '../../store/api-actions';
import { getReviewsStatus } from '../../store/review-data/selectors';

type CommentProps = {
  offerId?: string;
};

function CommentForm({ offerId }: CommentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(REVIEW_INITIAL_STATE);
  const reviewStatus = useAppSelector(getReviewsStatus);
  const isSubmitting = reviewStatus === FetchStatus.Loading;
  const isSubmitDisabled = formData.comment.length < MIN_COMMENT_LENGTH || formData.comment.length > MAX_COMMENT_LENGTH || formData.rating === REVIEW_INITIAL_STATE.rating || isSubmitting;

  useEffect(() => {
    if (reviewStatus === FetchStatus.None) {
      setFormData(REVIEW_INITIAL_STATE);
    }
  }, [reviewStatus]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, rating: Number(value) });
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, comment: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (offerId && !isSubmitDisabled) {
      dispatch(
        submitCommentAction({
          id: offerId,
          comment: formData.comment,
          rating: formData.rating,
        })
      );
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING.map((currentRating) => (
            <Fragment key={currentRating.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={currentRating.value}
                id={`${currentRating.value}-stars`}
                type="radio"
                checked={formData.rating === currentRating.value}
                disabled={reviewStatus === FetchStatus.Loading}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${currentRating.value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={currentRating.name}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        disabled={reviewStatus === FetchStatus.Loading}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
