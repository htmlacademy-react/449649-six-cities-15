import { useAppSelector } from '../../hooks/useApp';

function UserItem(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">{user?.email}</span>
      <span className="header__favorite-count">3</span>
    </a>
  );
}

export default UserItem;
