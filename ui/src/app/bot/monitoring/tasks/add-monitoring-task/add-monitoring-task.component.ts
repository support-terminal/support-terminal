import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import MonitoringTask from '../models/MonitoringTask';
import {MonitoringTasksService} from '../services/monitoring-tasks.service';
import {MessagingBusService} from '../../../../bus/messaging-bus.service';
import {Router} from '@angular/router';
import Channel from '../../../../bus/Сhannel';

@Component({
  selector: 'app-add-monitoring-task',
  templateUrl: './add-monitoring-task.component.html',
  styleUrls: ['./add-monitoring-task.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddMonitoringTaskComponent {

  constructor(private monitoringTasksService: MonitoringTasksService,
              private messagingBusService: MessagingBusService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  add(task: MonitoringTask): void {
    this.monitoringTasksService.add(task)
      .subscribe(t => {
        this.snackBar.open('Monitoring task "' + t.name + '"', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.MONITORING_TASKS_WERE_UPDATED});
        this.router.navigateByUrl('/bot-monitoring');
      });
  }

}
