import DbConnection from '../models/DbConnection';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';


import DbConnectionType from '../models/DbConnectionType';
import CheckDbConnection from '../models/CheckDbConnection';
import {Inject, OnDestroy} from '@angular/core';
import Channel from '../../bus/Сhannel';
import {MessagingBusService} from '../../bus/messaging-bus.service';
import {Config} from '../../config';


export class DbConnectionsService implements OnDestroy {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private readonly url;
  private messagesSubscription: Rx.Subscription;

  public dbConnectionsList: Rx.BehaviorSubject<DbConnection[]>
    = new Rx.BehaviorSubject<DbConnection[]>(new Array());

  constructor(@Inject(HttpClient) private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api + '/db-connections';
    this.getAll();
    this.messagesSubscription = this.messagingBusService.bus().subscribe(message => {
      if (message.channel === Channel.DB_CONNECTIONS_WERE_UPDATED) {
        this.getAll();
      }
    });
  }

  add(db: DbConnection): Observable<DbConnection> {
    return this.http
      .post<DbConnection>(this.url, db, this.headers);
  }

  checkConnection(db: DbConnection): Observable<CheckDbConnection> {
    return this.http
      .post<CheckDbConnection>(this.url + '/check', db, this.headers);
  }

  getAll() {
    this.http.get<DbConnection[]>(this.url, this.headers)
      .subscribe(dbs => {
        this.dbConnectionsList.next(dbs);
      });
  }

  getDbTypes(): Observable<DbConnectionType[]> {
    return this.http.get<DbConnectionType[]>(this.url + '/types', this.headers);
  }

  get(dbConnectionId: string): Observable<DbConnection> {
    return this.http
      .get<DbConnection>(this.url + `/${dbConnectionId}`);
  }

  delete(dbConnectionId: string): Observable<any> {
    return this.http
      .delete(this.url + `/${dbConnectionId}`);
  }

  update(db: DbConnection): Observable<DbConnection> {
    return this.http
      .put<DbConnection>(this.url + `/${db.id}`, db, this.headers);
  }


  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

}
