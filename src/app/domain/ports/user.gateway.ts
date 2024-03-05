import { Observable } from 'rxjs';
import { User } from '../model/user';

export abstract class UserGateway {
  abstract getUser(id: string): Observable<User>;
  abstract getAllUsers(): Observable<User[]>;
}
