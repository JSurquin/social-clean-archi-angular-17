import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../shared/forms/login-form/login-form.component';
import { AuthenticationGateway } from '../../ports/authentication.gateway';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  errorMessage!: string;
  #authenticationGateway = inject(AuthenticationGateway);

  onSubmit() {
    // if credentials are valid,
    this.#authenticationGateway.login('john', 'john');
  }
}
