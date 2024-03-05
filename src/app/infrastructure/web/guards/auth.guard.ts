import { Auth } from './../../../domain/model/auth';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationGateway } from '../../../domain/ports/authentication.gateway';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authGateway = inject(AuthenticationGateway);
  const router = inject(Router);

  if (authGateway.isAuth) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
