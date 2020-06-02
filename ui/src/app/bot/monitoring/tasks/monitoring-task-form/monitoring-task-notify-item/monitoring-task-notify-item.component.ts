import {Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import * as Rx from 'rxjs';
import {ControlContainer, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {NotificationApiService} from '../../../../../notifications-api/services/notification-api.service';
import Notify from '../../../../models/Notify';
import NotificationApi from '../../../../models/Bot';


@Component({
  selector: 'app-monitoring-task-notify-item',
  templateUrl: './monitoring-task-notify-item.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  encapsulation: ViewEncapsulation.Emulated
})
export class MonitoringTaskNotifyItemComponent implements OnDestroy {

  private notificationsApisSubscription: Rx.Subscription;
  private notificationApis: NotificationApi[];

  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
  @Input() notifyForm: FormGroup;
  @Input() notifyModel: Notify;
  @Input() index: number;

  constructor(private notificationApiService: NotificationApiService) {
    this.notificationsApisSubscription = this.notificationApiService.notificationApiList.subscribe((bots) => {
      this.notificationApis = bots;
    });
  }

  submitRemoveMe(): void {
    this.removeMeEvent.emit(this.index);
  }

  ngOnDestroy() {
    this.notificationsApisSubscription.unsubscribe();
  }
}
