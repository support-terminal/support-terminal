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
    this.getList();
  }

  ngOnDestroy() {
    this.botsListSubscription.unsubscribe();
  }

  getList() {
    this.botsListSubscription = this.notificationApiService
      .notificationApiList.subscribe((list) => {
        this.botsList = list;
      });
  }


}
