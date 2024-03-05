import { Component } from '@angular/core';
import CommentFormComponent from '../../forms/comment-form/comment-form.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentFormComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  isOpen = false;

  toggleComments() {
    this.isOpen = !this.isOpen;
  }
}
