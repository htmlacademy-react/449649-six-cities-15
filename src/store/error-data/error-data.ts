import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorData } from '../../types/types';

const initialState: ErrorData = {
  errorMessage: null
};

export const errorMessage = createSlice({
  name: NameSpace.ErrorMessage,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      const { error } = action.payload;
      state.errorMessage = error;
    },
    clearError: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { setError, clearError } = errorMessage.actions;
