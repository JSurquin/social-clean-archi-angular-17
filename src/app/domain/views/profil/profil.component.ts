import {
  Component,
  Input,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { UserGateway } from '../../ports/user.gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export default class ProfilComponent {
  @Input({ required: true }) id!: string;
  userGateway = inject(UserGateway);
  #route = inject(ActivatedRoute);
  id2 = this.#route.snapshot.paramMap.get('id');
  userFromRoute = toSignal(this.userGateway.getUser(this.id2 as string));
  userFromInput2 = toSignal(this.userGateway.getUser(this.id as string));
  user: WritableSignal<User | {}> = signal({});

  ngOnInit() {
    const data$ = this.userGateway.getUser(this.id);
    data$.subscribe((user: User) => {
      this.user.set(user);
    });
  }
}
