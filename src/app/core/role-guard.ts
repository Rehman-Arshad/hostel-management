import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const allowedRoles = route.data['roles'] as string[] | undefined;
    const user = this.auth.getUser();
    if (!user) return this.router.createUrlTree(['/login']);
    if (!allowedRoles || allowedRoles.includes(user.role)) return true;
    // unauthorized - redirect to their dashboard
    const redirect = user.role.toLowerCase();
    return this.router.createUrlTree([`/${redirect}`]);
  }
}
