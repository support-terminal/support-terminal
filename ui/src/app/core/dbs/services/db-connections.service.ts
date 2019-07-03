import DbConnection from "../models/DbConnection";

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";


import DbType from "../models/DbType";
import CheckDbConnection from "../models/CheckDbConnection";
import {Config} from "../../../config";
import {Inject} from "@angular/core";


export class DbConnectionsService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private urlDbConnections;

  constructor(@Inject(HttpClient) private http: HttpClient,
              private config: Config) {
    this.urlDbConnections = config.api+'/db-connections';
  }

  add(db:DbConnection): Observable<DbConnection> {
   return this.http
      .post<DbConnection>(this.urlDbConnections, db, this.headers);
  }

  checkConnection(db:DbConnection): Observable<CheckDbConnection> {
   return this.http
      .post<CheckDbConnection>(this.urlDbConnections+"/check", db, this.headers);
  }

  getAll(): Observable<DbConnection[]>{
    return this.http.get<DbConnection[]>(this.urlDbConnections,this.headers);
  }

  getDbTypes(): Observable<DbType[]>{
    return this.http.get<DbType[]>(this.urlDbConnections+"/types",this.headers);
  }

  get(dbConnectionId: string): Observable<DbConnection> {
    return this.http
      .get<DbConnection>(this.urlDbConnections+`/${dbConnectionId}`);
  }

  delete(dbConnectionId: string): Observable<any> {
    return this.http
      .delete(this.urlDbConnections+`/${dbConnectionId}`);
  }

  update(db:DbConnection): Observable<DbConnection> {
    return this.http
      .put<DbConnection>(this.urlDbConnections+`/${db.id}`, db, this.headers);
  }


}
