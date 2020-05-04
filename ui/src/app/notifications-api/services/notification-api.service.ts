import NotificationApi from '../models/NotificationApi';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


import NotificationApiType from '../models/NotificationApiType';

import {Inject} from '@angular/core';
import {Config} from '../../config';


export class NotificationApiService {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  constructor(@Inject(HttpClient) private http: HttpClient,
              private config: Config) {
    this.url = config.api + '/notifications-api';
  }

  add(bot: NotificationApi): Observable<NotificationApi> {
    return this.http
      .post<NotificationApi>(this.url, bot, this.headers);
  }

  getAll(): Observable<NotificationApi[]> {
    return this.http.get<NotificationApi[]>(this.url, this.headers);
  }

  get(botId: string): Observable<NotificationApi> {
    return this.http
      .get<NotificationApi>(this.url + `/${botId}`);
  }

  delete(botId: string): Observable<any> {
    return this.http
      .delete(this.url + `/${botId}`);
  }

  update(bot: NotificationApi): Observable<NotificationApi> {
    return this.http
      .put<NotificationApi>(this.url + `/${bot.id}`, bot, this.headers);
  }

  denied(botId: string, joinId: string): Observable<any> {
    return this.http
      .put(this.url + `/${botId}/join/${joinId}/denied`, {}, this.headers);
  }

  accept(botId: string, joinId: string): Observable<any> {
    return this.http
      .put(this.url + `/${botId}/join/${joinId}/accept`, {}, this.headers);
  }

  getBotTypes(): Observable<NotificationApiType[]> {
    return this.http.get<NotificationApiType[]>(this.url + '/types', this.headers);
  }


}
