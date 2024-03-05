import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationAdapterService } from './authentication.adapter.service';
import { AuthenticationGateway } from '../../ports/authentication.gateway';

describe('AuthGateway', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthenticationGateway,
          useClass: AuthenticationAdapterService,
        },
      ],
    });
  });

  it('should be created', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should have login method', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      expect(service.login).toBeTruthy();
    }
  ));

  it('should have isAuth boolean', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      expect(service.isAuth).toBeFalsy();
    }
  ));

  it('should call login method', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      const email = 'j@gmail.com';
      const password = 'j@gmail.com';
      const loginSpy = jest.spyOn(service, 'login');
      service.login(email, password);

      expect(service.login).toHaveBeenCalled();
    }
  ));

  it('should call login method and return isAuth false because login reject', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      const email = 'j@gmail.com';
      const password = 'j@gmail.com';
      service.login(email, password);
      expect(service.isAuth).toBeFalsy();
    }
  ));

  it('should call login method and return isAuth true', inject(
    [AuthenticationGateway],
    (service: AuthenticationGateway) => {
      const email = 'john';
      const password = 'john';
      service.login(email, password);
      expect(service.isAuth).toBeTruthy();
    }
  ));
});
