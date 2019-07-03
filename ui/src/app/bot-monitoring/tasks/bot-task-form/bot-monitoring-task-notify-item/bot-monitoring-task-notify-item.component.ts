import {Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {BotMonitoringTasksService} from "../../services/bot-monitoring-tasks.service";
import Notify from "../../models/Notify";
import Bot from "../../models/Bot";
import * as Rx from "rxjs";
import {ControlContainer, NgForm} from "@angular/forms";


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
    @Input() notify: Notify;
    @Input() index: number;

    constructor(private botMonitoringTasksService: BotMonitoringTasksService) {
        this.slackBotsSubscription = this.botMonitoringTasksService.slackBotsSubject.subscribe((slackBots)=>{
            this.slackBots = slackBots;
        });
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
