import Logo from '../../components/logo/logo';
import UserItem from '../user-item/user-item';
import SignOutButton from '../sign-out-button/sign-out-button';
import { useAppSelector } from '../../hooks/useApp';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isLoggedIn ? (
                <>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <li className="header__nav-item user">
                        <UserItem />
                      </li>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <SignOutButton />
                  </li>
                </>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
