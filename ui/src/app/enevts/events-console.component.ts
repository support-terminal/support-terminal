import {Component, OnDestroy} from '@angular/core';
import {EventsService} from './services/events.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-events-console',
  styleUrls: ['./events-console.component.scss'],
  templateUrl: './events-console.component.html'
})
export class EventsConsoleComponent implements OnDestroy {

  private subscription: Subscription;
  private applicationEvents: string[];

  constructor(private eventsService: EventsService) {
    this.subscription = this.eventsService.applicationEventsSubject.subscribe((arr) => {
      console.log(arr);
      this.applicationEvents = arr;
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
