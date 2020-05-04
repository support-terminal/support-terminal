import {Component, Input, ViewEncapsulation} from '@angular/core';
import DbConnection from '../../models/DbConnection';

import Channel from '../../../bus/Сhannel';
import {MessagingBusService} from '../../../api';


@Component({
  selector: 'db-item',
  templateUrl: './db-item.component.html',
  styleUrls: ['./db-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DbItemComponent{

  @Input() dbConnection: DbConnection;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_DB_CONNECTION_DIALOG, data:{dbConnectionId: this.dbConnection.id}});
  }

}
