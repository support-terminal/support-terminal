import {Component, Input, ViewEncapsulation} from '@angular/core';
import NotificationApi from '../../models/NotificationApi';


@Component({
  selector: 'app-notification-api-list-item',
  templateUrl: './notification-api-list-item.component.html',
  styleUrls: ['./notification-api-list-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotificationApiListItemComponent {

  @Input() bot: NotificationApi;
  awaitingRequests = 0;

/*  ngOnChanges(changes: SimpleChanges) {
    if (changes['bot']) {
      if (this.bot != null && this.bot !== undefined) {
        this.bot.joinRequests.forEach((v) => {
          if (v.state === 'IS_AWAITING_APPROVAL') {
            this.awaitingRequests++;
          }
        });
      }
    }
  }*/

}
