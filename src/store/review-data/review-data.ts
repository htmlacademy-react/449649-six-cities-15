import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchReviewsAction, submitCommentAction } from '../api-actions';


const initialState: ReviewsData = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: false
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData !== undefined && reviewsData !== null) {
          state.reviews = reviewsData;
        }

        state.reviewsIsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      })
      .addCase(submitCommentAction.fulfilled, (state, action) => {
        const newReview = action.payload;

        if (newReview !== undefined && newReview !== null) {
          state.reviews.push(newReview);
        }
      });
  },
});
