import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';

import MonitoringTask from '../models/MonitoringTask';
import {MonitoringTasksService} from '../services/monitoring-tasks.service';

@Component({
  selector: 'app-monitoring-tasks-list.component',
  templateUrl: './monitoring-tasks-list.component.html',
  styleUrls: ['./monitoring-tasks-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MonitoringTasksListComponent implements OnDestroy {

  private tasksList: MonitoringTask[];
  private tasksListSubscription: Subscription;

  constructor(private monitoringTasksService: MonitoringTasksService) {
    this.tasksListSubscription = this.monitoringTasksService
      .monitoringTasksList.subscribe((list) => {
        this.tasksList = list;
      });
  }

  ngOnDestroy() {
    this.tasksListSubscription.unsubscribe();
  }

}
