import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import NotificationApi from '../models/NotificationApi';
import {NotificationApiService} from '../services/notification-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagingBusService} from '../../bus/messaging-bus.service';
import Channel from '../../bus/Сhannel';

@Component({
  selector: 'app-edit-bot',
  templateUrl: './edit-notification-api.component.html',
  styleUrls: ['./edit-notification-api.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditNotificationApiComponent {

  private bot: NotificationApi;

  constructor(private route: ActivatedRoute,
              private messagingBusService: MessagingBusService,
              private notificationApiService: NotificationApiService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.bot = route.snapshot.data.notificationApi;
  }

  edit(bot: NotificationApi): void {
    this.notificationApiService.update(bot)
      .subscribe(api => {
        this.snackBar.open('Updated "' + api.label + '"', '', {
          duration: 4000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.NOTIFICATIONS_API_WERE_UPDATED});
      });
  }

  delete() {
    this.notificationApiService.delete(this.bot.id)
      .subscribe(n => {
        this.snackBar.open('Deleted', '', {
          duration: 4000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.NOTIFICATIONS_API_WERE_UPDATED});
        this.router.navigateByUrl('/notifications-api');
      });
  }

  changeCommandState(changeEvent: any) {
    if (changeEvent.checked) {
      this.bot.state = 'ENABLED';
    } else {
      this.bot.state = 'DISABLED';
    }
  }

}
