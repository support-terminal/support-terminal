import {MatDialog} from "@angular/material";

import {Subscription} from 'rxjs';
import Channel from "../../bus/Сhannel";


import {BotsService} from "./bots.service";
import {AddBotComponent} from "../add-bot/add-bot.component";
import {EditBotComponent} from "../edit-bot/edit-bot.component";
import {BotAccessListComponent} from "../bot-access-list/bot-access-list.component";
import {MessagingBusService} from "../../api";
import {Inject} from "@angular/core";


export class BotsBus {

  subscription: Subscription;

  constructor(@Inject(MatDialog) public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private botsService: BotsService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_BOT_DIALOG){
        this.openAddBotDialog();
      }else if(message.channel == Channel.OPEN_EDIT_BOT_DIALOG){
          this.openEditBotDialog(message.data.botId);
      }else if(message.channel == Channel.OPEN_BOT_ACCESS_LIST_DIALOG){
          this.openAccessListDialog(message.data.botId);
      }

    });
  }

  openAddBotDialog(): void {
    let dialogRef = this.dialog.open(AddBotComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.BOTS_WERE_UPDATED})
    });
  }


  openEditBotDialog(botId:string): void {
    this.botsService.get(botId)
      .subscribe(bot => {
        let dialogRef = this.dialog.open(EditBotComponent, {
          width: '700px',
          data:{bot: bot}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.BOTS_WERE_UPDATED})
        });

      });
  }

  openAccessListDialog(botId:string): void {
    this.botsService.get(botId)
      .subscribe(bot => {
        let dialogRef = this.dialog.open(BotAccessListComponent, {
          width: '600px',
          data:{botId: bot.id}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.BOTS_WERE_UPDATED})
        });

      });
  }


}
