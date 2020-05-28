import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-monitoring-task-condition-item',
  templateUrl: './monitoring-task-condition-item.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  encapsulation: ViewEncapsulation.Emulated
})
export class MonitoringTaskConditionItemComponent {

  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
  @Input() conditionForm: FormGroup;
  @Input() index: number;


  submitRemoveMe(): void {
    this.removeMeEvent.emit(this.index);
  }

}
