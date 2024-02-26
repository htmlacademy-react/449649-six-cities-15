import { useState, ChangeEvent, Fragment, FormEvent } from 'react';
import { RATING_MAP } from '../../const';

function CommentForm(): JSX.Element {
  const [form, setForm] = useState({
    rating: '0',
    comment: '',
  });

  type ChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setValue: React.Dispatch<React.SetStateAction<{ rating: string; comment: string }>>) => void;

  const handleChange: ChangeHandler = (event, setValue) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(RATING_MAP).map(([title, score]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={form.rating === score}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
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
        value={form.comment}
        onChange={(event) => handleChange(event, setForm)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe your stay with at least{''}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        //disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
