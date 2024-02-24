import { USER_INFO } from '../../const';

function UserItem(): JSX.Element {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">{USER_INFO.userName}</span>
      <span className="header__favorite-count">{USER_INFO.favoriteCount}</span>
    </a>
  );
}

export default UserItem;
