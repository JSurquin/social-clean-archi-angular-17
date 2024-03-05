import { createAction, props } from '@ngrx/store';

export const loadFeeds = createAction('[Feed Page] Load Feeds');

export const loadFeedsSuccess = createAction(
  '[Feeds API] Load Feeds Success',
  props<{ feeds: any[] }>()
);

export const loadFeedsFailure = createAction(
  '[Feeds API] Load Feeds Failure',
  props<{ error: any }>()
);
