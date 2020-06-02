import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {Inject, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(@Inject(AuthService) private auth: AuthService,
                private router: Router) {}
    canActivate(
        next:  ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.auth.isAuthenticated()) { return true; }
        this.router.navigateByUrl('login');
        return false;
    }
}
