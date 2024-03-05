import { Observable } from 'rxjs';
import { AuthenticationGateway } from '../../ports/authentication.gateway';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationAdapterService implements AuthenticationGateway {
  isAuth = false;
  #route = inject(Router);

  login(email: string, password: string): any {
    if (email === 'john' && password === 'john') {
      this.isAuthenticated();
    } else {
      this.#route.navigate(['/abcdc']);
    }
  }

  register(email: string, password: string, name: string): Promise<void> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  isAuthenticated(): any {
    return (this.isAuth = true);
  }
}
