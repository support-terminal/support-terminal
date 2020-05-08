import {Component, Input, ViewEncapsulation} from '@angular/core';

import Channel from '../../../bus/Сhannel';
import BotMonitoringTask from '../../models/BotMonitoringTask';
import {MessagingBusService} from '../../../../core/api';


@Component({
  selector: 'bot-task-item',
  templateUrl: './bot-task-item.component.html',
  styleUrls: ['./bot-task-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotTaskItemComponent{

  @Input() task: BotMonitoringTask;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_BOT_TASKS_DIALOG, data:{id: this.task.id}});
  }

}
