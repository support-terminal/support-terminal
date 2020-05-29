import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, NgForm} from '@angular/forms';
import {MonitoringTasksService} from '../../services/monitoring-tasks.service';
import ConditionType from '../../../../models/ConditionType';

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
  public conditionsTypes: ConditionType[];

  constructor(private monitoringTasksService: MonitoringTasksService) {
    this.monitoringTasksService.getConditionTypes().subscribe(types => {
      this.conditionsTypes = types;
    });
  }

  submitRemoveMe(): void {
    this.removeMeEvent.emit(this.index);
  }

  getConditionName(type: string) {
    this.conditionsTypes.forEach((c) => {
      if (c.type === type) {
        return c.label;
      }
    });
  }
}
