import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FeedGateway } from '../../../ports/feed.gateway';

@Component({
  selector: 'app-create-feed',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-feed.component.html',
  styleUrl: './create-feed.component.scss',
})
export class CreateFeedComponent {
  createFeedForm: FormGroup = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
  });

  #detectorRef = inject(ChangeDetectorRef);

  #feedGateway = inject(FeedGateway);

  onSubmit() {
    const isValid = this.createFeedForm.valid;
    const isPristine = this.createFeedForm.pristine;
    const isDirty = this.createFeedForm.dirty;

    if (isValid) {
      this.#feedGateway
        .sendFeed(this.createFeedForm.value)
        .subscribe((data) => {
          this.#feedGateway.getAllFeeds().subscribe((feeds) => {});
        });
    } else {
      isDirty ?? console.log('Form is invalid');
      isPristine ?? console.log('Please fill in the form');
    }
  }
}
