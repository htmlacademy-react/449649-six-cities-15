import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { setCity, setCityName, setOffersByCity } from '../../store/offers-data/offers-data';
import { getAllCities, getAllCitiesNames, getCityName } from '../../store/offers-data/selectors';

function CitiesTabs(): JSX.Element {
  const cityName = useAppSelector(getCityName);
  const allCities = useAppSelector(getAllCities);
  const citiesNames = useAppSelector(getAllCitiesNames);
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => {
    const selectedCity = allCities.find((item) => item.name === city);

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
