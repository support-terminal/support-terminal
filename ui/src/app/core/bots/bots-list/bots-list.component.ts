import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from "rxjs";


import Bot from "../models/Bot";
import Channel from "../../bus/Сhannel";
import {BotsService} from "../services/bots.service";
import {MessagingBusService} from "../../api";


@Component({
  selector: 'bots-list',
  templateUrl: './bots-list.component.html',
  styleUrls: ['./bots-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotsListComponent implements OnDestroy{

  private botsList: Bot[] = new Array();
  private botsListSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private telegramBotsService: BotsService) {

    this.getBotsList();
    this.botsListSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.BOTS_WERE_UPDATED){
        this.getBotsList();
      }
    });
  }

  ngOnDestroy(){
    this.botsListSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_BOT_DIALOG});
  }

  getBotsList(){
    this.telegramBotsService.getAll().subscribe(bots => {
      this.botsList = bots;
    });
  }


}
