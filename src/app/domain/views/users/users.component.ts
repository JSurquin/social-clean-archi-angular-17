import { Component, Signal, inject } from '@angular/core';
import { UserGateway } from '../../ports/user.gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../model/user';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export default class UsersComponent {
  #userGateway = inject(UserGateway);
  users: Signal<User[] | undefined> = toSignal(this.#userGateway.getAllUsers());
}
