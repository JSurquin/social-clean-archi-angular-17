import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FeedState } from './feeds_ngxs.action';
import { retrievePost, retrievedPostSuccessFull } from './feed_types';
import { FeedGateway } from '../../ports/feed.gateway';
import { FeedAdapterService } from '../../adapters/feed/feed.adapter.service';
import { provideHttpClient } from '@angular/common/http';

describe('test actions ngxs for feeds', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FeedState])],
      providers: [
        { provide: FeedGateway, useClass: FeedAdapterService },
        provideHttpClient(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('it toggles feed', () => {
    store.dispatch(new retrievePost());
    const payload = { id: 1, title: 2 };
    store.dispatch(new retrievedPostSuccessFull(payload));
    let state = store.selectSnapshot((state) => state);
    const feed = store.selectSnapshot((state) => state.feeds.feeds);
    expect(feed).toBeTruthy();
  });
});
