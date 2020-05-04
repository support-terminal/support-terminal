import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';

import {TextProcessorsHandlersService} from './text-processors-handlers.service';

import {Inject} from '@angular/core';
import {MessagingBusService} from '../../../api';
import Channel from '../../../bus/Сhannel';
import {AddTextProcessorHandlerComponent} from '../add-text-processor-handler/add-text-processor-handler.component';
import {EditTextProcessorHandlerComponent} from '../edit-text-processor-handler/edit-text-processor-handler.component';


export class TextProcessorsHandlersBus {

  subscription: Subscription;

  constructor(@Inject(MatDialog)public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private textProcessorsHandlersService: TextProcessorsHandlersService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG){
        this.openAddDialog();
      }else if(message.channel == Channel.OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG){
        this.openEditDialog(message.data.textHandlerId);
      }
    });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddTextProcessorHandlerComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.TEXT_HANDLER_PROCESSORS_WERE_UPDATED})
    });
  }

  openEditDialog(id:string): void {
    this.textProcessorsHandlersService.get(id)
      .subscribe(textProcessorHandler => {
        let dialogRef = this.dialog.open(EditTextProcessorHandlerComponent, {
          width: '700px',
          data:{
            textProcessorHandler: textProcessorHandler
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.TEXT_HANDLER_PROCESSORS_WERE_UPDATED})
        });

      });
  }




}

