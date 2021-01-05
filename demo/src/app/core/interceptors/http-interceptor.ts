import {HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NavigationExtras, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptor implements HttpInterceptor {

  constructor(private _router: Router ) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({headers: request.headers.set('psn', 'alacriti')});
        request = request.clone({
            withCredentials: true
        });

        // Intercept Request here
        return next.handle(request).pipe(tap(event => {
            if (event instanceof HttpResponse) {

              // REDIRECT USER TO LOGIN SCREEN IF TOKEN IS EXPIRED OR INVALID

              const navigationExtras: NavigationExtras = {
                state: {
                  code: 0,
                  message: 'Session Expired, Please login again !'
                }
              };
              this._router.navigate(['/auth/login'], navigationExtras);
            }

        },error => {
              // handle error
        }));
    }
}
