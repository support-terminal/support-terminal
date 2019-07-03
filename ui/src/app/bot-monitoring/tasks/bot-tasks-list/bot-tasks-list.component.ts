import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from "rxjs";


import BotMonitoringTask from "../models/BotMonitoringTask";
import Channel from "../../bus/Сhannel";
import {BotMonitoringTasksService} from "../services/bot-monitoring-tasks.service";
import {MessagingBusService} from "../../../core/api";


@Component({
  selector: 'bot-tasks-list',
  templateUrl: './bot-tasks-list.component.html',
  styleUrls: ['./bot-tasks-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotTasksListComponent implements OnDestroy{

  private tasksList: BotMonitoringTask[];
  private commandsListSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private botTasksService: BotMonitoringTasksService) {

    this.getBotsList();
    this.commandsListSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.BOT_TASKS_WERE_UPDATED){
        this.getBotsList();
      }
    });
  }

  ngOnDestroy(){
    this.commandsListSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_BOT_TASK_DIALOG});
  }

  getBotsList(){
    this.botTasksService.getAll().subscribe(commands => {
      this.tasksList = commands;
    });
  }


}
