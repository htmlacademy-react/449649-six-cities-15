import { useNavigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../store/user-data/selectors';
import { useAppDispatch, useAppSelector } from './useApp';
import { AppRoute, AuthorizationStatus } from '../const';
import { setFavoriteAction } from '../store/api-actions';

export const useFavorites = (offerId: string, status: number, sourceUpdate: string) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function handleFavoritesChange() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoriteAction({ offerId, status, sourceUpdate }));
  }

  return handleFavoritesChange;
};
