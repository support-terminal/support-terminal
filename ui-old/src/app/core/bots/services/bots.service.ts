import Bot from '../models/Bot';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


import BotType from '../models/BotType';
import {Config} from '../../../config';
import {Inject} from '@angular/core';
import {MatDialog} from '@angular/material';


export class BotsService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  constructor(@Inject(HttpClient) private http: HttpClient,
              private config: Config) {
    this.url = config.api+'/bots';
  }

  add(bot:Bot): Observable<Bot> {
   return this.http
      .post<Bot>(this.url, bot, this.headers);
  }

  getAll(): Observable<Bot[]>{
    return this.http.get<Bot[]>(this.url,this.headers);
  }

  get(botId: string): Observable<Bot> {
    return this.http
      .get<Bot>(this.url+`/${botId}`);
  }

  delete(botId: string): Observable<any> {
    return this.http
      .delete(this.url+`/${botId}`);
  }

  update(bot:Bot): Observable<Bot> {
    return this.http
      .put<Bot>(this.url+`/${bot.id}`, bot, this.headers);
  }

  denied(botId:string, joinId:string): Observable<any> {
    return this.http
      .put(this.url+`/${botId}/join/${joinId}/denied`, {},this.headers);
  }

  accept(botId:string, joinId:string): Observable<any> {
    return this.http
      .put(this.url+`/${botId}/join/${joinId}/accept`, {}, this.headers);
  }

  getBotTypes(): Observable<BotType[]>{
    return this.http.get<BotType[]>(this.url+'/types',this.headers);
  }


}
