import {Component, Input, ViewEncapsulation} from '@angular/core';

import TextProcessorHandler from '../../models/TextProcessorHandler';
import Channel from '../../../../bus/Сhannel';
import {MessagingBusService} from '../../../../api';


@Component({
  selector: 'text-processor-handler-item',
  templateUrl: './text-processor-item.component.html',
  styleUrls: ['./text-processor-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorHandlerItemComponent{

  @Input() textProcessorHandler: TextProcessorHandler;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG,
      data:{textHandlerId: this.textProcessorHandler.id}});
  }

}
