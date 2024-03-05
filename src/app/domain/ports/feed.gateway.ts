import { Feed } from './../model/feed';
import { Observable } from 'rxjs';

export abstract class FeedGateway {
  abstract getSpecificFeed(id: string): Observable<Feed>;
  abstract getAllFeeds(): Observable<Feed[]>;
  abstract sendFeed(feed: Feed): Observable<Feed>;
  abstract updateFeed(feed: Feed): Observable<Feed>;
  abstract deleteFeed(id: string): Observable<Feed>;
}
