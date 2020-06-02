import {Inject} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {MonitoringTasksService} from './monitoring-tasks.service';
import MonitoringTask from '../models/MonitoringTask';

export class MonitoringTasksResolver implements Resolve<MonitoringTask> {

  constructor(@Inject(MonitoringTasksService)
              private monitoringTasksService: MonitoringTasksService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.paramMap.get('id');
    return new Promise((resolve, reject) => {
      this.monitoringTasksService.get(id).subscribe(handler => {
        resolve(handler);
      });
    });
  }

}
