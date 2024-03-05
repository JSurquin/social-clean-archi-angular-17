import { Component, Input, Signal } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { Feed } from '../../../model/feed';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommentsComponent, JsonPipe, RouterLink],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  @Input({ required: true }) feeds: Signal<Feed[]> = [] as unknown as Signal<
    Feed[]
  >;
}
