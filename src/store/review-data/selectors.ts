import { FetchStatus, NameSpace } from '../../const';
import { Reviews, State } from '../../types/types';

export const getReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;
export const getReviewsIsLoading = (state: State): boolean => state[NameSpace.Reviews].reviewsIsLoading;
export const getReviewsStatus = (state: State): FetchStatus => state[NameSpace.Reviews].reviewStatus;
