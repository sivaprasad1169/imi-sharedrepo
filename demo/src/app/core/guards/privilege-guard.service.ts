import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class PrivilegeGuardService implements CanActivate {

    constructor() {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const privId: number = route.data.priv_id;

        // check if the authenticated user has the current priv or not, and return true/false;
        // if user doesn't have the current privilege then redirect user to a page displaying a message as no access
        let hasPrivilege: boolean = true;

        return hasPrivilege;
    }

}
