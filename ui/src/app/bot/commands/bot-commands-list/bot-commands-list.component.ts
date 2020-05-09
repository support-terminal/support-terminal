import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';


import {BotCommandsService} from '../services/bot-commands.service';
import {Subscription} from 'rxjs';
import {MessagingBusService} from '../../../bus/messaging-bus.service';
import Channel from '../../../bus/Сhannel';
import BotCommand from '../../models/BotCommand';
import DbConnection from '../../../db-connections/models/DbConnection';
import {DbConnectionsService} from '../../../db-connections/services/db-connections.service';


@Component({
  selector: 'app-bot-commands-list',
  templateUrl: './bot-commands-list.component.html',
  styleUrls: ['./bot-commands-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandsListComponent implements OnDestroy {

  private commandsList: BotCommand[];
  private commandsListSubscription: Subscription;

  constructor(private botCommandsService: BotCommandsService) {
    this.commandsListSubscription = this.botCommandsService
      .botCommandsList.subscribe((list) => {
        this.commandsList = list;
      });
  }

  ngOnDestroy() {
    this.commandsListSubscription.unsubscribe();
  }

}
