import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MonitoringTasksService} from '../services/monitoring-tasks.service';
import Channel from '../../../../bus/Сhannel';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagingBusService} from '../../../../bus/messaging-bus.service';
import MonitoringTask from '../models/MonitoringTask';


@Component({
  selector: 'app-edit-monitoring-task',
  templateUrl: './edit-monitoring-task.component.html',
  styleUrls: ['./edit-monitoring-task.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditMonitoringTaskComponent {

  private task: MonitoringTask;

  constructor(private route: ActivatedRoute,
              private messagingBusService: MessagingBusService,
              private router: Router,
              private monitoringTasksService: MonitoringTasksService,
              private snackBar: MatSnackBar) {
    this.task = route.snapshot.data.task;

  }

  edit(task: MonitoringTask): void {
    this.monitoringTasksService.update(task)
      .subscribe(t => {
        this.snackBar.open('Saved', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.MONITORING_TASKS_WERE_UPDATED});
      });
  }


  delete() {
    this.monitoringTasksService.delete(this.task.id)
      .subscribe(command => {
        this.snackBar.open('Deleted', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.MONITORING_TASKS_WERE_UPDATED});
        this.router.navigateByUrl('/bot-monitoring');
      });
  }


}
