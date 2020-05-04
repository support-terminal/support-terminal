import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';


import DbConnection from '../models/DbConnection';
import Channel from '../../bus/Сhannel';
import {DbConnectionsService} from '../services/db-connections.service';
import {MessagingBusService} from '../../api';


@Component({
  selector: 'dbs-list',
  templateUrl: './dbs-list.component.html',
  styleUrls: ['./dbs-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DbsListComponent implements OnDestroy{

  private dbskList: DbConnection[];
  private dbskListSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private dbConnectionsService: DbConnectionsService) {

    this.getDbsList();
    this.dbskListSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.DB_CONNECTIONS_WERE_UPDATED){
        this.getDbsList();
      }
    });
  }

  ngOnDestroy(){
    this.dbskListSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_DB_CONNECTION_DIALOG});
  }

  getDbsList(){
    this.dbConnectionsService.getAll().subscribe(dbs => {
      this.dbskList = dbs;
    });
  }


}
