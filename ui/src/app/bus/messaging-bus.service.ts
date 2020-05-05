import {Observable, Subject} from 'rxjs';


export interface Message {
  channel: string;
  data?: any;
}

export class MessagingBusService {

  private message$: Subject<Message>;

  constructor() {
    this.message$ = new Subject<Message>();
  }

  sendMessage(message: Message) {
    this.message$.next(message);
  }

  bus(): Observable<any> {
    return this.message$.asObservable();
  }

}
