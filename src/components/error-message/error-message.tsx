import { useAppSelector } from '../../hooks/useApp';
import { getErrorMessage } from '../../store/error-data/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
