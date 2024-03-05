import { createReducer, on } from '@ngrx/store';
import * as feedsActions from '../actions/feeds.action';

export const initialState: any = {
  feeds: [],
  error: null,
};

export const feedsReducer = createReducer(
  initialState,
  on(feedsActions.loadFeedsSuccess, (state, { feeds }) => ({
    ...state,
    feeds,
  })),

  on(feedsActions.loadFeedsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
