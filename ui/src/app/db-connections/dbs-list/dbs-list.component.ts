import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';


import DbConnection from '../models/DbConnection';
import {DbConnectionsService} from '../services/db-connections.service';


@Component({
  selector: 'app-dbs-list',
  templateUrl: './dbs-list.component.html',
  styleUrls: ['./dbs-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DbsListComponent implements OnDestroy {

  private dbsList: DbConnection[] = new Array();
  private dbListSubscription: Subscription;

  constructor(private dbConnectionsService: DbConnectionsService) {
    this.dbListSubscription = this.dbConnectionsService
      .dbConnectionsList.subscribe((list) => {
        this.dbsList = list;
      });
  }

  ngOnDestroy() {
    this.dbListSubscription.unsubscribe();
  }

}
