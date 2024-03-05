import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListComponent } from './feed-list.component';
import { FeedGateway } from '../../../ports/feed.gateway';
import { FeedAdapterService } from '../../../adapters/feed/feed.adapter.service';
import { provideHttpClient } from '@angular/common/http';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { feedsReducer } from '../../../store/reducers/feeds.reducer';
import { FeedsEffects } from '../../../store/effects/feeds.effect';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jest-marbles';
import { authGuard } from '../../../../infrastructure/web/guards/auth.guard';
import { NgxsModule, Store as NgxsStore } from '@ngxs/store';
import { FeedState } from '../../../store/actions/feeds_ngxs.action';

describe('FeedListComponent', () => {
  let guard: any;
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;
  let store: MockStore;
  let ngxsStore: NgxsStore;
  const initialState = { feeds: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedListComponent, NgxsModule.forRoot([FeedState])],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: FeedGateway,
          useClass: FeedAdapterService,
        },
        provideHttpClient(),
        //provideEffects([FeedsEffects]),
      ],
    }).compileComponents();

    //guard = TestBed.inject(authGuard);
    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    ngxsStore = TestBed.inject(NgxsStore);
  });

  const fakeFeeds = [
    {
      id: 'virgin',
      volumeInfo: {
        title: 'Mocked Title',
        authors: ['Mocked Author'],
      },
    },
  ];

  it('should return true if the user state is logged in', () => {
    store.setState({ feeds: { feeds: fakeFeeds } });

    // expect store contain feeds state
    expect(store).toBeTruthy();
    //expect(store).toContain('feeds');

    let result: any;
    store
      .select((state: any) => state.feeds.feeds)
      .subscribe((mockBooks) => {
        result = mockBooks;
      });

    expect(result).toEqual([
      {
        id: 'virgin',
        volumeInfo: {
          title: 'Mocked Title',
          authors: ['Mocked Author'],
        },
      },
    ]);

    //expect(guard).toBeObservable(expected);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
