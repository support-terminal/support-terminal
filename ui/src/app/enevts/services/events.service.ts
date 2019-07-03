import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import ApplicationEvent from "../models/ApplicationEvent";
import {BehaviorSubject} from "rxjs";

import {Config} from "../../config";
import {Inject} from "@angular/core";


export class EventsService {

  private applicationEvents: ApplicationEvent[] = new Array() ;
  public applicationEventsSubject: BehaviorSubject<ApplicationEvent[]> = new BehaviorSubject(this.applicationEvents);

  private stompClient;
  private MAX_COUNT_ENETS:number = 100;

  constructor(@Inject(Config) private config: Config){
      var socket = new SockJS(config.api+'/websocket');
      this.stompClient = Stomp.over(socket);
      this.stompClient.debug = null
      this.stompClient.connect({}, (frame) => {
        this.stompClient.subscribe("/topic/ui/events", (message) => {
          this.applicationEvents.push(JSON.parse(message.body));
          if(this.applicationEvents.length > this.MAX_COUNT_ENETS){
            this.applicationEvents = this.lastN(this.applicationEvents, this.MAX_COUNT_ENETS);
          }
          this.applicationEventsSubject.next(this.applicationEvents);
        });
      });
  }

  lastN(array, n) {
    if (array == null)
      return void 0;
    if (n == null)
      return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };


}
