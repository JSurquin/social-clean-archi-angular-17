import { Inject, Injectable, inject } from '@angular/core';
import { UserGateway } from '../../ports/user.gateway';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable()
export class UserAdapterService implements UserGateway {
  #http = inject(HttpClient);
  getAllUsers(): Observable<User[]> {
    return this.#http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id: string): Observable<User> {
    return this.#http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
