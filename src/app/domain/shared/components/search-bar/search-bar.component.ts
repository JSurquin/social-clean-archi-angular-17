import { Component, inject } from '@angular/core';
import { UserGateway } from '../../../ports/user.gateway';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  startWith,
  switchMap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  #userGateway = inject(UserGateway);
  #fb = inject(FormBuilder);
  searchInput$ = this.#fb.group({
    search: '',
  });

  data = toSignal(this.myFonction());

  private myFonction() {
    const users$ = this.#userGateway.getAllUsers();

    return combineLatest([
      users$,

      this.searchInput$.controls.search.valueChanges.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        startWith('')
      ),
    ]).pipe(
      map(([users, searching]) => {
        return users.filter((user: any) =>
          user.name.toLowerCase().includes(searching?.toLowerCase())
        );
      })
    );
  }
}
