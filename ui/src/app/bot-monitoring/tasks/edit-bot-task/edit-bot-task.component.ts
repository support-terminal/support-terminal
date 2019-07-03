import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import BotTask from "../models/BotMonitoringTask";
import {BotMonitoringTasksService} from "../services/bot-monitoring-tasks.service";


@Component({
    selector: 'edit-bot-task',
    templateUrl: './edit-bot-task.component.html',
    styleUrls: ['./edit-bot-task.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EditBotTaskComponent {

    private task: BotTask;

    constructor(public dialogRef: MatDialogRef<EditBotTaskComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private botTasksService: BotMonitoringTasksService,
                private snackBar: MatSnackBar) {
        this.task = data.task;
    }

    edit(task: BotTask): void {
        this.botTasksService.update(task)
            .subscribe(task => {
                this.snackBar.open("Изменения сохранены", '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }

    changeCommandState(changeEvent: any) {
        if(changeEvent.checked){
            this.task.state = 'ENABLED';
        }else{
            this.task.state = 'DISABLED';
        }
    }

    delete() {
        console.log("delete")
        this.botTasksService.delete(this.task.id)
            .subscribe(task => {
                this.dialogRef.close();
                this.snackBar.open("Удалено", '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }

    close() {
        this.dialogRef.close();
    }

}
