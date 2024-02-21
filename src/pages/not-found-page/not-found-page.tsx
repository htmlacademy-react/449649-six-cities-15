import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
    </>
  );
}

export default NotFoundPage;
