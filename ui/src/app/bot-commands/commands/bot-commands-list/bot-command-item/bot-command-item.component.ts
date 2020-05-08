import {Component, Input, ViewEncapsulation} from '@angular/core';
import Channel from '../../../bus/Сhannel';
import BotCommand from '../../models/BotCommand';
import {MessagingBusService} from '../../../../core/api';


@Component({
  selector: 'app-bot-command-item',
  templateUrl: './bot-command-item.component.html',
  styleUrls: ['./bot-command-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandItemComponent{

  @Input() command: BotCommand;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_BOT_COMMAND_DIALOG, data:{id: this.command.id}});
  }

}
