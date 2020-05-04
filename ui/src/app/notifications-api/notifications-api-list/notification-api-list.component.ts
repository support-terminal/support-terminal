import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';

import NotificationApi from '../models/NotificationApi';
import {NotificationApiService} from '../services/notification-api.service';

@Component({
  selector: 'app-notification-api-list',
  templateUrl: './notification-api-list.component.html',
  styleUrls: ['./notification-api-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotificationApiListComponent implements OnDestroy {

  public botsList: NotificationApi[] = new Array();
  private botsListSubscription: Subscription;

  constructor(private notificationApiService: NotificationApiService) {
    this.getBotsList();
 }

  ngOnDestroy() {
   // this.botsListSubscription.unsubscribe();
  }

  getBotsList() {
    this.notificationApiService.getAll().subscribe(bots => {
      this.botsList = bots;
    });
  }


}
