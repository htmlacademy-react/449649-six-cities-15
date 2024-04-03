import { useState, ChangeEvent, Fragment, FormEvent, useEffect } from 'react';
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

  useEffect(() => {
    if (reviewStatus === FetchStatus.None) {
      setFormData(REVIEW_INITIAL_STATE);
    }
  }, [reviewStatus]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (offerId) {
      dispatch(
        submitCommentAction({
          id: offerId,
          comment: formData.comment,
          rating: Number(formData.rating),
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
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATING.map((rating) => (
            <Fragment key={rating.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating.value}
                id={`${rating.value}-stars`}
                type="radio"
                checked={formData.rating === rating.value}
                disabled={isSubmitting}
                onChange={handleChange}
              />
              <label
                htmlFor={`${rating.value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={rating.name}
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
        disabled={isSubmitting}
        onChange={handleChange}
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
          disabled={
            formData.comment.length < MIN_COMMENT_LENGTH ||
            formData.comment.length > MAX_COMMENT_LENGTH ||
            formData.rating === 0 ||
            isSubmitting
          }
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
