import { ComponentFixture, TestBed } from '@angular/core/testing';

import UsersComponent from './users.component';
import { UserGateway } from '../../ports/user.gateway';
import { UserAdapterService } from '../../adapters/user/user.adapter.service';
import { provideHttpClient } from '@angular/common/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        { provide: UserGateway, useClass: UserAdapterService },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
