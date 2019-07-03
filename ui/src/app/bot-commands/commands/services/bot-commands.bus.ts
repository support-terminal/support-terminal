import {MatDialog} from "@angular/material";

import {Subscription} from 'rxjs';
import Channel from "../../bus/Сhannel";


import {BotCommandsService} from "./bot-commands.service";
import {AddBotCommandComponent} from "../add-bot-command/add-bot-command.component";
import {EditBotCommandComponent} from "../edit-bot-command/edit-bot-command.component";
import {MessagingBusService} from "../../../core/api";


export class BotCommandsBus {

  private subscription: Subscription;


  constructor(public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private telegramCommandsService: BotCommandsService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_BOT_COMMAND_DIALOG){
        this.openAddDialog();
      }else if(message.channel == Channel.OPEN_EDIT_BOT_COMMAND_DIALOG){
          this.openEditDialog(message.data.id);
      }
    });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddBotCommandComponent, {
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.BOT_COMMANDS_WERE_UPDATED})
    });
  }


  openEditDialog(id:string): void {
    this.telegramCommandsService.get(id)
      .subscribe(command => {
        let dialogRef = this.dialog.open(EditBotCommandComponent, {
          width: '900px',
          data:{
            command: command
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.BOT_COMMANDS_WERE_UPDATED})
        });

      });
  }

}
