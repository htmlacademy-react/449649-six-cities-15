import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { setCity, setCityName, setOffersByCity } from '../../store/offers-data/offers-data';
import { getCityName } from '../../store/offers-data/selectors';

function CitiesTabs(): JSX.Element {
  const cityName = useAppSelector(getCityName);
  const citiesNames: string[] = CITIES.map((city) => city.name);
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => {
    const selectedCity = CITIES.find((item) => item.name === city);

    if (selectedCity) {
      dispatch(setCityName(city));
      dispatch(setCity(selectedCity));
      dispatch(setOffersByCity());
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citiesNames.map((city: string) => (
              <li className="locations__item" key={city}>
                <a className={`locations__item-link tabs__item ${city === cityName ? 'tabs__item--active' : ''}`}
                  onClick={() => handleCityClick(city)}
                >
                  <span>{city}</span>
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
