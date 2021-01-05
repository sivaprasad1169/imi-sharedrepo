import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserInfo} from "../models/user-info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  // communicated with server and gets user info along with privileges
  public getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(environment.baseUrl + 'user/current-user');
  }


}
