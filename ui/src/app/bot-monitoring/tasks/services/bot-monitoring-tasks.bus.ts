import {MatDialog} from "@angular/material";

import {Subscription} from 'rxjs';
import Channel from "../../bus/Сhannel";


import {BotMonitoringTasksService} from "./bot-monitoring-tasks.service";
import {AddBotTaskComponent} from "../add-bot-task/add-bot-task.component";
import {EditBotTaskComponent} from "../edit-bot-task/edit-bot-task.component";
import {MessagingBusService} from "../../../core/api";
import {Inject} from "@angular/core";


export class BotMonitoringTasksBus {

  private subscription: Subscription;


  constructor(@Inject(MatDialog) public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private botTasksService: BotMonitoringTasksService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_BOT_TASK_DIALOG){
        this.openAddDialog();
      }else if(message.channel == Channel.OPEN_EDIT_BOT_TASKS_DIALOG){
          this.openEditDialog(message.data.id);
      }
    });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddBotTaskComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.BOT_TASKS_WERE_UPDATED})
    });
  }


  openEditDialog(id:string): void {
    this.botTasksService.get(id)
      .subscribe(task => {
        let dialogRef = this.dialog.open(EditBotTaskComponent, {
          width: '1000px',
          data:{
              task: task
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.BOT_TASKS_WERE_UPDATED})
        });

      });
  }

}
