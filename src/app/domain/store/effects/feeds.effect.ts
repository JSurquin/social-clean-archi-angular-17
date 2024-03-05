import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as feedActions from '../actions/feeds.action';
import { FeedGateway } from '../../ports/feed.gateway';
import { Feed } from '../../model/feed';

@Injectable()
export class FeedsEffects {
  #feedGateway = inject(FeedGateway);

  constructor(private actions$: Actions) {}
  loadPosts = createEffect(() =>
    this.actions$.pipe(
      ofType(feedActions.loadFeeds),
      mergeMap(() =>
        this.#feedGateway.getAllFeeds().pipe(
          map((feeds) => feedActions.loadFeedsSuccess({ feeds })),
          catchError((error) => [feedActions.loadFeedsFailure({ error })])
        )
      )
    )
  );

  sendPost = createEffect(() =>
    this.actions$.pipe(
      ofType(feedActions.loadFeeds),
      mergeMap(() =>
        this.#feedGateway.sendFeed({} as any).pipe(
          map((feeds: any) => feedActions.loadFeedsSuccess({ feeds })),
          catchError((error) => [feedActions.loadFeedsFailure({ error })])
        )
      )
    )
  );
}
