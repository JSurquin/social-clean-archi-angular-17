import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { FeedGateway } from '../../../ports/feed.gateway';
import { FeedAdapterService } from '../../../adapters/feed/feed.adapter.service';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';
import { FeedState } from '../../../store/actions/feeds_ngxs.action';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { signal } from '@angular/core';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let store: Store;
  let secondStore: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedComponent, NgxsModule.forRoot([FeedState])],
      providers: [
        {
          provide: FeedGateway,
          useClass: FeedAdapterService,
        },
        provideMockStore({} as any),
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    component.feeds = signal([]);
    fixture.detectChanges();
    //store = TestBed.inject(Store);
    //secondStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
