import { Injectable, inject } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { retrievePost, retrievedPostSuccessFull } from './feed_types';
import { tap } from 'rxjs';
import { FeedGateway } from '../../ports/feed.gateway';

@State<string[]>({
  name: 'feeds',
  defaults: [],
})
@Injectable()
export class FeedState {
  feedGateway = inject(FeedGateway);

  @Action(retrievePost)
  retrievePost(ctx: StateContext<any>) {
    return this.feedGateway.getAllFeeds().pipe(
      tap((data) => {
        ctx.dispatch(new retrievedPostSuccessFull(data));
      })
    );
  }

  @Action(retrievedPostSuccessFull)
  retrievedPostSuccessFull(ctx: any, action: any) {
    ctx.patchState({ feeds: action.payload });
  }
}
