import {Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotMonitoringTasksService} from '../../services/bot-monitoring-tasks.service';
import Notify from '../../models/Notify';
import Bot from '../../models/Bot';
import * as Rx from 'rxjs';
import {ControlContainer, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
    selector: 'bot-monitoring-task-notify-item',
    templateUrl: './bot-monitoring-task-notify-item.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
    encapsulation: ViewEncapsulation.Emulated
})
export class BotMonitoringTaskNotifyItemComponent implements OnDestroy{

    private slackBots: Bot[];
    private slackBotsSubscription: Rx.Subscription;

    @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
    @Input() notifyForm: FormGroup;
    @Input() notifyModel: Notify;
    @Input() index: number;

    constructor(private botMonitoringTasksService: BotMonitoringTasksService,
                private fb: FormBuilder) {
        this.slackBotsSubscription = this.botMonitoringTasksService.slackBotsSubject.subscribe((slackBots)=>{
            this.slackBots = slackBots;
        });
    }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['notifyForm']) {
      this.notifyForm.addControl('botId',  this.fb.control('', [Validators.required]));
      this.notifyForm.addControl('messageTemplate',  this.fb.control('', [Validators.required]));
    }
    if (changes['notifyModel']) {
      if (this.notifyModel != null) {
        this.notifyForm.controls['botId'].setValue(this.notifyModel.botId);
        this.notifyForm.controls['messageTemplate'].setValue(this.notifyModel.messageTemplate);
      }
    }
  }

    getNotifyName(type: string){
        if(type == 'SLACK_BOT_API'){
            return 'Уведомить через Slack';
        }
    }

    submitRemoveMe(): void {
        this.removeMeEvent.emit(this.index);
    }

    ngOnDestroy() {
        this.slackBotsSubscription.unsubscribe();
    }
}
