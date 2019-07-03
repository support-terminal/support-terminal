import BotMonitoringTask from "../models/BotMonitoringTask";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import DbConnection from "../models/DbConnection";
import Bot from "../models/Bot";
import Channel from "../../bus/Сhannel";
import * as Rx from "rxjs";
import {Config} from "../../../config";
import {MessagingBusService} from "../../../core/api";


export class BotMonitoringTasksService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private url;
  private dataBasesUrl;
  private botsUrl;

  public botsSubject: Rx.BehaviorSubject<Bot[]> = new Rx.BehaviorSubject<Bot[]>(new Array());
  public slackBotsSubject: Rx.BehaviorSubject<Bot[]> = new Rx.BehaviorSubject<Bot[]>(new Array());
  public dataBasesSubject: Rx.BehaviorSubject<DbConnection[]> = new Rx.BehaviorSubject<DbConnection[]>(new Array());

  private subscription: Rx.Subscription;

  constructor(private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api+'/bot-monitoring/tasks';
    this.dataBasesUrl = config.api+'/db-connections';
    this.botsUrl = config.api+'/bots';

    this.requestDataBases();
    this.requestBots();

    this.subscription = this.messagingBusService.getMessage().subscribe(message => {
        if (message.channel == Channel.BOTS_WERE_UPDATED) {
            this.requestBots();
        }else if (message.channel == Channel.DB_CONNECTIONS_WERE_UPDATED) {
            this.requestDataBases();
        }
    });
  }

  requestDataBases(){
   this.http.get<DbConnection[]>(this.dataBasesUrl, this.headers)
       .subscribe(dbs => {
           this.dataBasesSubject.next(dbs);
   });
  }

  requestBots() {
      this.http.get<Bot[]>(this.botsUrl, this.headers)
          .subscribe(bots => {
              this.botsSubject.next(bots);
              this.slackBotsSubject.next(
                  bots.filter(function (b) {return b.type == 'SLACK_BOT'})
              );
      });
  }


  add(command:BotMonitoringTask): Rx.Observable<BotMonitoringTask> {
   return this.http
      .post<BotMonitoringTask>(this.url, command, this.headers);
  }

  getAll(): Rx.Observable<BotMonitoringTask[]>{
    return this.http.get<BotMonitoringTask[]>(this.url,this.headers);
  }

  get(commandId: string): Rx.Observable<BotMonitoringTask> {
    return this.http
      .get<BotMonitoringTask>(this.url+`/${commandId}`);
  }

  delete(commandId: string): Rx.Observable<any> {
    return this.http
      .delete(this.url+`/${commandId}`);
  }

  update(command:BotMonitoringTask): Rx.Observable<BotMonitoringTask> {
    return this.http
      .put<BotMonitoringTask>(this.url+`/${command.id}`, command, this.headers);
  }


}
