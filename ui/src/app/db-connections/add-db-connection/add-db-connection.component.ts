import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {DbConnectionsService} from '../services/db-connections.service';
import DbConnection from '../models/DbConnection';
import {MessagingBusService} from '../../bus/messaging-bus.service';
import {Router} from '@angular/router';
import Channel from '../../bus/Сhannel';

@Component({
  selector: 'app-add-db-connection',
  templateUrl: './add-db-connection.component.html',
  styleUrls: ['./add-db-connection.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddDbConnectionComponent {

  constructor(private dbConnectionsService: DbConnectionsService,
              private messagingBusService: MessagingBusService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  addDbConnection(dbConnection: DbConnection): void {
    this.dbConnectionsService.add(dbConnection)
      .subscribe(db => {
        this.snackBar.open('Db connection ' + db.name, '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.DB_CONNECTIONS_WERE_UPDATED});
        this.router.navigateByUrl('/db-connections');
      });
  }

}
