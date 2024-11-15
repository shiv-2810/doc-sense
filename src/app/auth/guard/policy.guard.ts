import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { ROUTE_DATA_POLICIES } from '../../../shared/constant';
import { AuthService } from '../auth.service';

export const PolicyGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  return inject(AuthService).checkPolicies(route.data?.[ROUTE_DATA_POLICIES]);
};
