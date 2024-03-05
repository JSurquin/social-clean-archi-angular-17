import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div>
      <form
        class="flex gap-x-4"
        [formGroup]="loginForm"
        (ngSubmit)="onSubmit()"
      >
        <input formControlName="email" type="email" placeholder="votre email" />
        <input
          formControlName="password"
          type="password"
          placeholder="votre mot de
  passe"
        />
        <button class="p-2 rounded-lg bg-purple-500 text-white">
          se connecter
        </button>
      </form>
      @for(error of errorMessages; track error) {
      <p>{{ error }}</p>
      }
    </div>
  `,
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(20),
      //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
    ]),
  });

  @Output() errorMessage: EventEmitter<string> = new EventEmitter<string>();

  errorMessages: string[] = [];

  verificationField = (form: FormGroup) => {
    this.errorMessages = [];
    const isPristine = form.pristine;
    const isDirty = form.dirty;
    if (form.valid) {
      return true;
    } else {
      isPristine ? this.errorMessage.emit('Please fill in the form') : null;
      if (isDirty) {
        Object.keys(form.controls).forEach((key) => {
          if (form.controls[key].status === 'INVALID') {
            this.errorMessages.push(`${key} is invalid`);
          }
        });
      }
    }
    return false;
  };

  onSubmit() {
    this.verificationField(this.loginForm)
      ? console.log("Form is valid, let's submit it")
      : null;
  }
}
