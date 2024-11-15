import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuthenticated = authService.isLoggedIn();
  if (!isAuthenticated) {
    return router.createUrlTree(['/auth']);
  }
  return true;
};
