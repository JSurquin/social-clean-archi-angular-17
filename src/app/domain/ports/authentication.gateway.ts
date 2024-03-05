import { Observable } from 'rxjs';

export abstract class AuthenticationGateway {
  // variables
  isAuth: boolean = false;

  // classes
  abstract login(email: string, password: string): Observable<string>;
  abstract register(
    email: string,
    password: string,
    name: string
  ): Promise<void>;
  abstract isAuthenticated: () => Observable<any>;
}
