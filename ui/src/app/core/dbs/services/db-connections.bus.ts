import {MatDialog} from "@angular/material";
import {AddDbConnectionComponent} from "../add-db-connection/add-db-connection.component";
import {Subscription} from 'rxjs';
import Channel from "../../bus/Сhannel";

import {DbConnectionsService} from "./db-connections.service";
import {EditDbConnectionComponent} from "../edit-db-connection/edit-db-connection.component";
import {MessagingBusService} from "../../api";
import {Inject} from "@angular/core";


export class DbConnectionsBus {

  subscription: Subscription;

  constructor(@Inject(MatDialog) public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private dbConnectionsService: DbConnectionsService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_DB_CONNECTION_DIALOG){

        this.openAddDbConnectionDialog();

      }else if(message.channel == Channel.OPEN_EDIT_DB_CONNECTION_DIALOG){

          this.openEditDbConnectionDialog(message.data.dbConnectionId);

      }

    });
  }

  openAddDbConnectionDialog(): void {
    let dialogRef = this.dialog.open(AddDbConnectionComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.DB_CONNECTIONS_WERE_UPDATED})
    });
  }


  openEditDbConnectionDialog(dbConnectionId:string): void {
    this.dbConnectionsService.get(dbConnectionId)
      .subscribe(db => {
        let dialogRef = this.dialog.open(EditDbConnectionComponent, {
          width: '700px',
          data:{dbConnection: db}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.DB_CONNECTIONS_WERE_UPDATED})
        });

      });
  }


}
