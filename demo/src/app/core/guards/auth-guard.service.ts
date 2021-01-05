import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthGuardService implements CanActivate {

    constructor() {
    }

    public canActivate(): boolean {
       // validate token with backend service and set a boolean value to hasSession variable
        let hasSession: boolean = true;

       return hasSession;
    }
}
