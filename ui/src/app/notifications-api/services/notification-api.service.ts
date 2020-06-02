import NotificationApi from '../models/NotificationApi';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';


import NotificationApiType from '../models/NotificationApiType';

import {Inject, OnDestroy} from '@angular/core';
import {Config} from '../../config';
import Channel from '../../bus/Сhannel';
import {MessagingBusService} from '../../bus/messaging-bus.service';


export class NotificationApiService implements OnDestroy {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private url;
  private messagesSubscription: Rx.Subscription;

  public notificationApiList: Rx.BehaviorSubject<NotificationApi[]>
    = new Rx.BehaviorSubject<NotificationApi[]>(new Array());


  constructor(@Inject(HttpClient) private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api + '/notifications-api';
    this.getAll();
    this.messagesSubscription = this.messagingBusService.bus().subscribe(message => {
      if (message.channel === Channel.NOTIFICATIONS_API_WERE_UPDATED) {
        this.getAll();
      }
    });
  }

  add(bot: NotificationApi): Observable<NotificationApi> {
    return this.http
      .post<NotificationApi>(this.url, bot, this.headers);
  }

  getAll() {
    this.http.get<NotificationApi[]>(this.url, this.headers)
      .subscribe(dbs => {
        this.notificationApiList.next(dbs);
      });
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

  getTypes(): Observable<NotificationApiType[]> {
    return this.http.get<NotificationApiType[]>(this.url + '/types', this.headers);
  }


  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }


}
