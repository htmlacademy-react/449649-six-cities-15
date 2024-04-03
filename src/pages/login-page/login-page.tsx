import Logo from '../../components/logo/logo';
import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { getAllCities, getAllCitiesNames } from '../../store/offers-data/selectors';
import { getRandomInteger } from '../../utils';
import { setCity, setCityName, setOffersByCity } from '../../store/offers-data/offers-data';

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ login: '', password: '' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const citiesNames = useAppSelector(getAllCitiesNames);
  const allCities = useAppSelector(getAllCities);
  const randomCityName = citiesNames[getRandomInteger(0, citiesNames.length - 1)];

  const handleCityClick = (city: string) => {
    const selectedCity = allCities.find((item) => item.name === city);

    if (selectedCity) {
      dispatch(setCityName(city));
      dispatch(setCity(selectedCity));
      dispatch(setOffersByCity());
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
    navigate(AppRoute.Main);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="login"
                  placeholder="Email"
                  value={formData.login}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                onClick={() => handleCityClick(randomCityName)}
                to={AppRoute.Main}
              >
                <span>{randomCityName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
