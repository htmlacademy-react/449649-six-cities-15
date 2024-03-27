import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const getErrorMessage = (state: State): string | null => state[NameSpace.ErrorMessage].errorMessage;
