import {Component, Input, ViewEncapsulation} from '@angular/core';


import MonitoringTask from '../../models/MonitoringTask';


@Component({
  selector: 'app-monitoring-task-item',
  templateUrl: './monitoring-task-item.component.html',
  styleUrls: ['./monitoring-task-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MonitoringTaskItemComponent {

  @Input() task: MonitoringTask;

}
