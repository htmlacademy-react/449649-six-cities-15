import Logo from '../../components/logo/logo';
import { FormEvent, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, CITIES } from '../../const';
import { getRandomInteger } from '../../utils';
import { setCity, setCityName, setOffersByCity } from '../../store/offers-data/offers-data';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;
  const randomCityName = useMemo(() => CITIES[getRandomInteger(0, CITIES.length - 1)].name, []);

  const handleCityClick = (city: string) => {
    const selectedCity = CITIES.find((item) => item.name === city);

    if (selectedCity) {
      dispatch(setCityName(city));
      dispatch(setCity(selectedCity));
      dispatch(setOffersByCity());
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    if (loginValue !== undefined && passwordValue !== undefined) {
      dispatch(loginAction({ login: loginValue, password: passwordValue }));
      if (isLoggedIn) {
        navigate(AppRoute.Main);
      }
    }
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
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
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
                  ref={passwordRef}
                  pattern="(?=^.{2,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Za-z]).*"
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
