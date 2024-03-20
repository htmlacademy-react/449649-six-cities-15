import { setCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { getCitiesFromOffers } from '../../store/selectors';

function CitiesTabs(): JSX.Element {
  const cities = useAppSelector((state) => getCitiesFromOffers(state.offers));
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.name}>
                <a className="locations__item-link tabs__item" onClick={() => dispatch(setCity(city))}>
                  <span>{city.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesTabs;
