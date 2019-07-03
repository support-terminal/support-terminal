import {Component, Input, SimpleChanges, ViewEncapsulation} from '@angular/core';
import Bot from "../../models/Bot";

import Channel from "../../../bus/Сhannel";
import {MessagingBusService} from "../../../api";


@Component({
  selector: 'bot-item',
  templateUrl: './bot-item.component.html',
  styleUrls: ['./bot-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotItemComponent{

  @Input() bot: Bot;
  awaitingRequests: number = 0;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_BOT_DIALOG, data:{botId: this.bot.id}});
  }

  accessList(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_BOT_ACCESS_LIST_DIALOG, data:{botId: this.bot.id}});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bot']) {
      if(this.bot != null && this.bot != undefined){
        this.bot.joinRequests.forEach((v)=>{
          if(v.state == 'IS_AWAITING_APPROVAL'){
            this.awaitingRequests++;
          }
        });
      }
    }
  }

}
