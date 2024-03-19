import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { useAppSelector } from '../../hooks/useApp';
import { getCitiesFromOffers } from '../../store/selectors';

function MainEmptyPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const cities = useAppSelector((state) => getCitiesFromOffers(state.offers));

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <CitiesTabs cities={cities} />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {city.name}
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmptyPage;
