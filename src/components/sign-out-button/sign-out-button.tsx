import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useApp';

function SignOutButton(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Link
      className="header__nav-link"
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      to='/'
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignOutButton;
