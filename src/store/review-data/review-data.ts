import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/types';
import { FetchStatus, NameSpace } from '../../const';
import { fetchReviewsAction, submitCommentAction } from '../api-actions';


const initialState: ReviewsData = {
  reviews: [],
  reviewsIsLoading: false,
  reviewStatus: FetchStatus.None
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewStatus = FetchStatus.Loading;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData !== undefined && reviewsData !== null) {
          state.reviews = reviewsData;
        }

        state.reviewsIsLoading = false;
        state.reviewStatus = FetchStatus.None;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewStatus = FetchStatus.Rejected;
      })
      .addCase(submitCommentAction.fulfilled, (state, action) => {
        const newReview = action.payload;

        if (newReview !== undefined && newReview !== null) {
          state.reviews.push(newReview);
        }
      });
  },
});
