import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <section className="login">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;
