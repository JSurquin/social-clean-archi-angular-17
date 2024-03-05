import { Component, Input, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentGateway } from '../../../ports/comment.gateway';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export default class CommentFormComponent {
  formsObject: any = { description: null };
  #commentGateway = inject(CommentGateway);

  onSubmit() {
    let isValid;
    Object.keys(this.formsObject).forEach((key) => {
      if (!this.formsObject[key]) {
        console.log(`${key} is invalid`);
        return (isValid = false);
      }
      return (isValid = true);
    });
    if (isValid) {
      this.#commentGateway.sendComment(this.formsObject);
      console.log('Comment created');
    } else {
      console.log('Form is invalid');
    }
  }
}
