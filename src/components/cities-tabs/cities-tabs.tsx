import { setCity } from '../../store/action';
import { useAppDispatch } from '../../hooks/useApp';
import { Cities } from '../../types/types';

type CitiesTabsProps = { cities: Cities }

function CitiesTabs({ cities }: CitiesTabsProps): JSX.Element {
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
