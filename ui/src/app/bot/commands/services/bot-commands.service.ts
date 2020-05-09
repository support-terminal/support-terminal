import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';
import {Config} from '../../../config';
import {Inject, OnDestroy} from '@angular/core';
import {MessagingBusService} from '../../../bus/messaging-bus.service';
import Channel from '../../../bus/Сhannel';
import BotCommand from '../../models/BotCommand';


export class BotCommandsService implements OnDestroy {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  private messagesSubscription: Rx.Subscription;
  public botCommandsList = new Rx.BehaviorSubject<BotCommand[]>(new Array());


  constructor(@Inject(HttpClient) private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api + '/bot-commands';

    this.getAll();
    this.messagesSubscription = this.messagingBusService.bus().subscribe(message => {
      if (message.channel === Channel.BOT_COMMANDS_WERE_UPDATED) {
        this.getAll();
      }
    });
  }

  add(command: BotCommand): Observable<BotCommand> {
    return this.http
      .post<BotCommand>(this.url, command, this.headers);
  }

  getAll() {
    this.http.get<BotCommand[]>(this.url, this.headers)
      .subscribe(list => {
        this.botCommandsList.next(list);
      });
  }

  get(commandId: string): Observable<BotCommand> {
    return this.http
      .get<BotCommand>(this.url + `/${commandId}`);
  }

  delete(commandId: string): Observable<any> {
    return this.http
      .delete(this.url + `/${commandId}`);
  }

  update(command: BotCommand): Observable<BotCommand> {
    return this.http
      .put<BotCommand>(this.url + `/${command.id}`, command, this.headers);
  }


  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }
}
