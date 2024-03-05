import { AuthenticationGateway } from './domain/ports/authentication.gateway';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { UserGateway } from './domain/ports/user.gateway';
import { UserAdapterService } from './domain/adapters/user/user.adapter.service';
import { FeedGateway } from './domain/ports/feed.gateway';
import { FeedAdapterService } from './domain/adapters/feed/feed.adapter.service';
import { CommentGateway } from './domain/ports/comment.gateway';
import { CommentAdapterService } from './domain/adapters/comment/comment.adapter.service';
import { FeedsEffects } from './domain/store/effects/feeds.effect';
import { feedsReducer } from './domain/store/reducers/feeds.reducer';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxsModule } from '@ngxs/store';
import { FeedState } from './domain/store/actions/feeds_ngxs.action';
import { AuthenticationAdapterService } from './domain/adapters/auth/authentication.adapter.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(),
    provideStore({ feeds: feedsReducer }),
    provideEffects([FeedsEffects]),
    importProvidersFrom(
      NgxsModule.forRoot([FeedState]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      })
      // StoreModule.forRoot({
      //   feeds: feedsReducer,
      // }),
      // EffectsModule.forRoot([FeedsEffects])
    ),
    { provide: UserGateway, useClass: UserAdapterService },
    { provide: FeedGateway, useClass: FeedAdapterService },
    { provide: CommentGateway, useClass: CommentAdapterService },
    { provide: AuthenticationGateway, useClass: AuthenticationAdapterService },
  ],
};
