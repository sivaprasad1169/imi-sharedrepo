import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../../../environments/environment";
import {RecordInfo} from "./records-state";

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) {}

  public getRecords(): Observable<Array<RecordInfo>> {
    return this.http.get<Array<RecordInfo>>(environment.baseUrl + 'records');
  }


}
