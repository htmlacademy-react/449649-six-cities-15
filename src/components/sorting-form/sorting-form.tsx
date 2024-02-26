import SortingOption from '../sorting-option/sorting-option';
import { SORTING_OPTIONS } from '../../const';
import { useState } from 'react';

function SortingForm(): JSX.Element {
  const [formState, setFormState] = useState({
    activeOption: SORTING_OPTIONS.POPULAR,
    isOptionsOpen: false
  });

  function handleOptionClick(option: string) {
    setFormState({
      ...formState,
      activeOption: option,
      isOptionsOpen: false
    });
  }

  function toggleOptions() {
    setFormState({
      ...formState,
      isOptionsOpen: !formState.isOptionsOpen
    });
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleOptions}>
        {formState.activeOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${formState.isOptionsOpen ? 'places__options--opened' : ''}`}>
        {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
          <SortingOption
            key={key}
            option={value}
            active={value === formState.activeOption}
            onClick={handleOptionClick}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
