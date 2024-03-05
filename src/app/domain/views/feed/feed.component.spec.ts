import { ComponentFixture, TestBed } from '@angular/core/testing';

import FeedComponent from './feed.component';
import { FeedGateway } from '../../ports/feed.gateway';
import { FeedAdapterService } from '../../adapters/feed/feed.adapter.service';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';
import { FeedState } from '../../store/actions/feeds_ngxs.action';
import { FeedListComponent } from '../../shared/components/feed-list/feed-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { feedsReducer } from '../../store/reducers/feeds.reducer';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let store: Store;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FeedComponent,
        FeedListComponent,
        NgxsModule.forRoot([FeedState]),
      ],
      providers: [
        provideMockStore({ feeds: feedsReducer } as any),
        {
          provide: FeedGateway,
          useClass: FeedAdapterService,
        },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
