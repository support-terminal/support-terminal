import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NotificationApiService} from '../services/notification-api.service';
import NotificationApi from '../models/NotificationApi';
import {Router} from '@angular/router';
import {MessagingBusService} from '../../bus/messaging-bus.service';
import Channel from '../../bus/Сhannel';

@Component({
  selector: 'app-add-notification-api',
  templateUrl: './add-notification-api.component.html',
  styleUrls: ['./add-notification-api.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddNotificationApiComponent {

  constructor(private notificationApiService: NotificationApiService,
              private messagingBusService: MessagingBusService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  addBot(api: NotificationApi): void {
    this.notificationApiService.add(api)
      .subscribe(notificatioApi => {
        this.snackBar.open('Notification API "' + notificatioApi.label + '" was saved', '', {
          duration: 4000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.NOTIFICATIONS_API_WERE_UPDATED});
        this.router.navigateByUrl('/notifications-api');
      });
  }
}
