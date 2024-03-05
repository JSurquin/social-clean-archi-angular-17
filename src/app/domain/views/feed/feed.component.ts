import { Component } from '@angular/core';
import { CreateFeedComponent } from '../../shared/forms/create-feed/create-feed.component';
import { FeedListComponent } from '../../shared/components/feed-list/feed-list.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CreateFeedComponent, FeedListComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export default class FeedComponent {}
