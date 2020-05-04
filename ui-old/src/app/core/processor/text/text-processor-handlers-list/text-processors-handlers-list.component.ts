import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';
import {TextProcessorsHandlersService} from '../services/text-processors-handlers.service';
import TextProcessorHandler from '../models/TextProcessorHandler';
import {MessagingBusService} from '../../../api';
import Channel from '../../../bus/Сhannel';

@Component({
  selector: 'text-processors-list',
  templateUrl: './text-processors-handlers-list.component.html',
  styleUrls: ['./text-processors-handlers-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorsHandlersListComponent implements OnDestroy{

  private textProcessorHandlers: TextProcessorHandler[];
  private textProcessorHandlersSubscriprion: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private textProcessorsHandlersService: TextProcessorsHandlersService) {

    this.getList();
    this.textProcessorHandlersSubscriprion = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.TEXT_HANDLER_PROCESSORS_WERE_UPDATED){
        this.getList();
      }
    });
  }

  ngOnDestroy(){
    this.textProcessorHandlersSubscriprion.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG});
  }

  getList(){
    this.textProcessorsHandlersService.getAll().subscribe(handlers => {
      this.textProcessorHandlers = handlers;
    });
  }


}
