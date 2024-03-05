import { Component, Signal, inject } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { UserGateway } from '../../../ports/user.gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeedGateway } from '../../../ports/feed.gateway';
import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import * as feedsAction from '../../../store/actions/feeds.action';
import { retrievePost } from '../../../store/actions/feed_types';
import { Store as NgxsStore } from '@ngxs/store';
import { Feed } from '../../../model/feed';
@Component({
  selector: 'app-feed-list',
  standalone: true,
  imports: [FeedComponent, AsyncPipe, JsonPipe],
  templateUrl: './feed-list.component.html',
  styleUrl: './feed-list.component.scss',
})
export class FeedListComponent {
  #feedGateway = inject(FeedGateway);
  #store = inject(Store);
  data = toSignal(this.#feedGateway.getAllFeeds()) as Signal<Feed[]>;
  call = this.#store.dispatch(feedsAction.loadFeeds());
  // state.feeds.feeds avant donc à voir
  response = toSignal(this.#store.select((state: any) => state.feeds));
  #ngxs = inject(NgxsStore);
  postNgxs$!: any;
  ngOnInit() {
    this.#ngxs.dispatch(new retrievePost());
    this.postNgxs$ = this.#ngxs.select((state) => state.posts.posts);
    this.postNgxs$.subscribe((data: any) => {});
  }
}
