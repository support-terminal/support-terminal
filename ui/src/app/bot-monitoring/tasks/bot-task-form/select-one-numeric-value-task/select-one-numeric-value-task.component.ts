import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import BotMonitoringTask from "../../models/BotMonitoringTask";
import {BotMonitoringTasksService} from "../../services/bot-monitoring-tasks.service";
import DbConnection from "../../models/DbConnection";
import Condition from "../../models/Condition";
import * as Rx from "rxjs";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
    selector: 'select-one-numeric-value-task',
    templateUrl: './select-one-numeric-value-task.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
    encapsulation: ViewEncapsulation.Emulated
})
export class SelectOneNumericValueTaskComponent implements OnDestroy {

    @Input() botTask: BotMonitoringTask;
    private dataBases: DbConnection[];
    private dataBasesSubscription: Rx.Subscription;

    constructor(private botTasksService: BotMonitoringTasksService) {
        this.dataBasesSubscription = this.botTasksService.dataBasesSubject.subscribe((dataBases)=>{
            this.dataBases = dataBases;
        });
;   }

    conditionsTypes = [
        {name: 'Больше чем', type: 'NUMERIC_MORE_THAN'},
        {name: 'Меньше чем', type: 'NUMERIC_LESS_THAN'},
        {name: 'Равно', type: 'NUMERIC_EQUAL'},
    ];

    addCondition(type: string){
        if (!Array.isArray(this.botTask.conditions)) {
            this.botTask.conditions = new Array();
        }
        this.botTask.conditions.push(new Condition(type))
    }

    dropCondition(index:number) {
        if (Array.isArray(this.botTask.conditions)) {
            this.botTask.conditions.splice(index, 1);
        }
    }

    ngOnDestroy() {
        this.dataBasesSubscription.unsubscribe();
    }
}
