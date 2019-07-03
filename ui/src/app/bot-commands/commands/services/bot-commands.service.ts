import BotCommand from "../models/BotCommand";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import DbConnection from "../models/DbConnection";
import Bot from "../models/Bot";
import Channel from "../../bus/Сhannel";
import * as Rx from "rxjs";
import {Observable} from "rxjs";
import {MessagingBusService} from "../../../core/api";
import {Config} from "../../../config";


export class BotCommandsService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private url;
  private dataBasesUrl;
  private botsUrl;

  public botsSubject: Rx.BehaviorSubject<Bot[]> = new Rx.BehaviorSubject<Bot[]>(new Array());
  public dataBasesSubject: Rx.BehaviorSubject<DbConnection[]> = new Rx.BehaviorSubject<DbConnection[]>(new Array());

  private subscription: Rx.Subscription;

  constructor(private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api+'/bot-commands/commands';
    this.dataBasesUrl = config.api+'/db-connections';
    this.botsUrl = config.api+'/bots';

    this.requestDataBases();
    this.requestBots();

    this.subscription = this.messagingBusService.getMessage().subscribe(message => {
        if (message.channel == Channel.BOTS_WERE_UPDATED) {
            this.requestBots();
        }else if (message.channel == Channel.DB_CONNECTIONS_WERE_UPDATED) {
            console.log("DB_CONNECTIONS_WERE_UPDATED")
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
      });
  }


  add(command:BotCommand): Observable<BotCommand> {
   return this.http
      .post<BotCommand>(this.url, command, this.headers);
  }

  getAll(): Observable<BotCommand[]>{
    return this.http.get<BotCommand[]>(this.url,this.headers);
  }

  get(commandId: string): Observable<BotCommand> {
    return this.http
      .get<BotCommand>(this.url+`/${commandId}`);
  }

  delete(commandId: string): Observable<any> {
    return this.http
      .delete(this.url+`/${commandId}`);
  }

  update(command:BotCommand): Observable<BotCommand> {
    return this.http
      .put<BotCommand>(this.url+`/${command.id}`, command, this.headers);
  }


}
