import {Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotMonitoringTask from "../models/BotMonitoringTask";
import Notify from "../models/Notify";


@Component({
    selector: 'bot-task-form',
    templateUrl: './bot-task-form.component.html',
    styleUrls: ['./bot-task-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class BotTaskFormComponent {

    @Output() onSubmitEvent: EventEmitter<BotMonitoringTask> = new EventEmitter();
    @Input() initial: BotMonitoringTask;
    @Input() submitButtonText: string;



    private botTask: BotMonitoringTask = new BotMonitoringTask();

    onSubmit(): void {
        this.onSubmitEvent.emit(this.botTask);
    }

    actionTypes = [
        {name: 'Выборка единичного числового значения из базы данных', type: 'SQL_SELECT_ONE_NUMERIC_VALUE'},
    ];

    cronTypes = [
        {name: 'Каждую минут', type: 'EVERY_1_MINUTE'},
        {name: 'Каждые 5 минут', type: 'EVERY_5_MINUTES'},
        {name: 'Каждые 15 минут', type: 'EVERY_15_MINUTES'},
        {name: 'Каждый час', type: 'EVERY_HOUR'}
    ];

    notifyTypes = [
        {name: 'Уведомить через Slack', type: 'SLACK_BOT_API'}
    ];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.botTask = this.initial;
            }
        }
    }

    addNotify(type: string){
        if (!Array.isArray(this.botTask.notifyList)) {
            this.botTask.notifyList = new Array();
        }
        this.botTask.notifyList.push(new Notify(type))
    }

    dropNotify(index:number) {
        if (Array.isArray(this.botTask.notifyList)) {
            this.botTask.notifyList.splice(index, 1);
        }
    }


}
