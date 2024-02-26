type SortingOptionProps = {
  option: string;
  active: boolean;
  onClick: (option: string) => void;
};

function SortingOption({ option, active, onClick }: SortingOptionProps): JSX.Element {
  return (
    <li className={`places__option ${active ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => onClick(option)}>
      {option}
    </li>
  );
}

export default SortingOption;
