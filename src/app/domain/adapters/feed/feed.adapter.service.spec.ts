// import { HttpClient } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { Injectable } from '@angular/core';
// import { FeedGateway } from '../../ports/feed.gateway';
// import { Feed } from '../../model/feed';
// import { Observable } from 'rxjs';

// @Injectable()
// export class FeedAdapterService implements FeedGateway {
//   #http = inject(HttpClient);
//   feeds: Feed[] = [];
//   //feeds = this.#http.get<Feed[]>('https://jsonplaceholder.typicode.com/posts');
//   getAllFeeds() {
//     return this.#http.get<Feed[]>('https://jsonplaceholder.typicode.com/posts');
//   }
//   getSpecificFeed(id: string) {
//     return this.#http.get<Feed>(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//   }

//   sendFeed(feed: Feed): Observable<Feed> {
//     return this.#http.post<Feed>(
//       'https://jsonplaceholder.typicode.com/posts',
//       feed
//     );
//   }

//   updateFeed(feed: Feed): Observable<Feed> {
//     return this.#http.put<Feed>(
//       `https://jsonplaceholder.typicode.com/posts/${feed.id}`,
//       feed
//     );
//   }

//   deleteFeed(id: string): Observable<Feed> {
//     return this.#http.delete<Feed>(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//   }
// }
describe('UserAdapterService', () => {
  it('shoud just create empty string', () => {
    expect('').toBe('');
  });
});
