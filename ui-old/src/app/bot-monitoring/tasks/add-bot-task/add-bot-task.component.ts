import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import BotMonitoringTask from '../models/BotMonitoringTask';
import {BotMonitoringTasksService} from '../services/bot-monitoring-tasks.service';

@Component({
  selector: 'add-bot-task',
  templateUrl: './add-bot-task.component.html',
  styleUrls: ['./add-bot-task.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddBotTaskComponent {

  constructor(public dialogRef: MatDialogRef<AddBotTaskComponent>,
              private botTasksService: BotMonitoringTasksService,
              private snackBar: MatSnackBar ) { }

  add(task: BotMonitoringTask ):void{
    this.botTasksService.add(task)
      .subscribe( task => {
        this.dialogRef.close();
          this.snackBar.open('Задача добавлена', '', {
              duration: 3000,
              panelClass: 'colorGreen',
              horizontalPosition: 'right'
          });
      });
  }

  close(){
    this.dialogRef.close();
  }


}
