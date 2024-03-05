import { ComponentFixture, TestBed } from '@angular/core/testing';

import LoginComponent from './login.component';
import { AuthenticationGateway } from '../../ports/authentication.gateway';
import { AuthenticationAdapterService } from '../../adapters/auth/authentication.adapter.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        {
          provide: AuthenticationGateway,
          useClass: AuthenticationAdapterService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
