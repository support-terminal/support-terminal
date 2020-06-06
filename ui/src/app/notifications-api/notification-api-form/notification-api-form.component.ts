import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import NotificationApi from '../models/NotificationApi';
import NotificationApiType from '../models/NotificationApiType';
import {NotificationApiService} from '../services/notification-api.service';


@Component({
  selector: 'app-notification-api-form',
  templateUrl: './notification-api-form.component.html',
  styleUrls: ['./notification-api-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotificationApiFormComponent implements OnChanges {

  @Output() onSubmitEvent: EventEmitter<NotificationApi> = new EventEmitter();
  @Input()  initial: NotificationApi;
  @Input()  submitButtonText: string;

  private bot: NotificationApi = new NotificationApi();
  private botTypes: NotificationApiType[];

  constructor(private botsService: NotificationApiService) {
    this.botsService.getTypes().subscribe(types => {
      this.botTypes = types;
    });
  }

  onSubmit(): void {
    this.onSubmitEvent.emit(this.bot);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initial) {
      if (this.initial != null && this.initial !== undefined) {
        this.bot = this.initial;
      }
    }
  }


  changeCommandState(changeEvent: any) {
    this.bot.enabled = changeEvent.checked
  }

}
