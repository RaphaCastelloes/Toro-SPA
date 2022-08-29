import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}