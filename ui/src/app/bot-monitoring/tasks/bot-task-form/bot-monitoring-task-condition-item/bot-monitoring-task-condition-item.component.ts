import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import Condition from "../../models/Condition";
import {ControlContainer, FormGroup, NgForm} from "@angular/forms";

@Component({
    selector: 'bot-monitoring-task-condition-item',
    templateUrl: './bot-monitoring-task-condition-item.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
    encapsulation: ViewEncapsulation.Emulated
})
export class BotMonitoringTaskConditionItem{

    @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
    @Input() condition: FormGroup;
    @Input() index: number;

    getConditionName(type: string){
        if(type == 'NUMERIC_MORE_THAN'){
            return ' Больше чем';
        }else if(type == 'NUMERIC_LESS_THAN'){
            return ' Меньше чем';
        }else if(type == 'NUMERIC_EQUAL'){
            return ' Равно';
        }
    }

    submitRemoveMe(): void {
        this.removeMeEvent.emit(this.index);
    }

}
