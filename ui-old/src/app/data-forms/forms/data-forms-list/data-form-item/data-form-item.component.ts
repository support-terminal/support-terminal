import {Component, Input, ViewEncapsulation} from '@angular/core';

import Channel from '../../../bus/Сhannel';
import DataForm from '../../models/DataForm';
import {MessagingBusService} from '../../../../core/api';


@Component({
  selector: 'data-form-item',
  templateUrl: './data-form-item.component.html',
  styleUrls: ['./data-form-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DataFormItemComponent{

  @Input() dataForm: DataForm;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_DATA_FORM_DIALOG, data:{id: this.dataForm.id}});
  }

}
