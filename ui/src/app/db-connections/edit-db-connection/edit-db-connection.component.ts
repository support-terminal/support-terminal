import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DbConnectionsService} from '../services/db-connections.service';
import DbConnection from '../models/DbConnection';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagingBusService} from '../../bus/messaging-bus.service';
import Channel from '../../bus/Сhannel';

@Component({
  selector: 'app-edit-db-connection',
  templateUrl: './edit-db-connection.component.html',
  styleUrls: ['./edit-db-connection.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditDbConnectionComponent {

  private dbConnection: DbConnection;

  constructor(private route: ActivatedRoute,
              private messagingBusService: MessagingBusService,
              private router: Router,
              private dbConnectionsService: DbConnectionsService,
              private snackBar: MatSnackBar) {
    this.dbConnection = route.snapshot.data.dbConnection;
  }

  editDbConnection(dbConnection: DbConnection): void {
    this.dbConnectionsService.update(dbConnection)
      .subscribe(db => {
        this.snackBar.open('Updated "' + db.name + '"', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.DB_CONNECTIONS_WERE_UPDATED});
      });
  }

  deleteDb() {
    this.dbConnectionsService.delete(this.dbConnection.id)
      .subscribe(db => {
        this.snackBar.open('Deleted', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.DB_CONNECTIONS_WERE_UPDATED});
        this.router.navigateByUrl('/db-connections');
      });
  }


}
