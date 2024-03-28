import Logo from '../../components/logo/logo';
import SignOutButton from '../sign-out-button/sign-out-button';
import { useAppSelector } from '../../hooks/useApp';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link, NavLink } from 'react-router-dom';
import { getAuthorizationStatus, getUser } from '../../store/user-data/selectors';
import { getFavoriteOffers } from '../../store/favorite-offers-data/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            {isLoggedIn ? (
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ backgroundImage: user?.avatarUrl }}
                    >
                    </div>
                    <span className="header__user-name user__name">{user?.name}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <SignOutButton />
                </li>
              </ul>
            ) : (
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Login}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
