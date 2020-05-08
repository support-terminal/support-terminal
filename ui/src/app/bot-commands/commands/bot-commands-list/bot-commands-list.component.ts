import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';


import BotCommand from '../models/BotCommand';
import Channel from '../../bus/Сhannel';
import {BotCommandsService} from '../services/bot-commands.service';
import {MessagingBusService} from '../../../core/api';
import {Subscription} from 'rxjs';


@Component({
  selector: 'bot-commands-list',
  templateUrl: './bot-commands-list.component.html',
  styleUrls: ['./bot-commands-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandsListComponent implements OnDestroy{

  private commandsList: BotCommand[];
  private commandsListSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private botCommandsService: BotCommandsService) {

    this.getBotsList();
    this.commandsListSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.BOT_COMMANDS_WERE_UPDATED){
        this.getBotsList();
      }
    });
  }

  ngOnDestroy(){
    this.commandsListSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_BOT_COMMAND_DIALOG});
  }

  getBotsList(){
    this.botCommandsService.getAll().subscribe(commands => {
      this.commandsList = commands;
    });
  }


}
