import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { CommonService } from "./common.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private commonService: CommonService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.commonService.isAuthenticated()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
}