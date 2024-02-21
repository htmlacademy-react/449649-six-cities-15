import Logo from '../../components/logo/logo';
import UserItem from '../user-item/user-item';
import SignOutButton from '../sign-out-button/sign-out-button';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <UserItem />
            <SignOutButton />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
