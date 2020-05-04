import WebUser from '../models/WebUser';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../../../config';
import {Inject} from '@angular/core';


export class WebUsersService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private urlWebUsers;

  constructor(@Inject(HttpClient) private http: HttpClient,
             private config: Config) {
    this.urlWebUsers = config.api+'/web-users';
  }

  add(db:WebUser): Observable<WebUser> {
   return this.http
      .post<WebUser>(this.urlWebUsers, db, this.headers);
  }

  getAll(): Observable<WebUser[]>{
    return this.http.get<WebUser[]>(this.urlWebUsers,this.headers);
  }

  get(userId: string): Observable<WebUser> {
    return this.http
      .get<WebUser>(this.urlWebUsers+`/${userId}`);
  }

  delete(userId: string): Observable<any> {
    return this.http
      .delete(this.urlWebUsers+`/${userId}`);
  }

  update(db:WebUser): Observable<WebUser> {
    return this.http
      .put<WebUser>(this.urlWebUsers+`/${db.id}`, db, this.headers);
  }

}
