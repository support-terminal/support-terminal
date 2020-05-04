import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DbConnectionsService} from '../services/db-connections.service';
import DbConnection from '../models/DbConnection';

@Component({
  selector: 'edit-db-connection',
  templateUrl: './edit-db-connection.component.html',
  styleUrls: ['./edit-db-connection.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditDbConnectionComponent {

  private dbConnection: DbConnection;
  constructor(public dialogRef: MatDialogRef<EditDbConnectionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dbConnectionsService: DbConnectionsService,
              private snackBar: MatSnackBar) {
       this.dbConnection = data.dbConnection;
  }

  editDbConnection(dbConnection: DbConnection ):void{
    this.dbConnectionsService.update(dbConnection)
      .subscribe( db => {
        this.snackBar.open('Изменения сохранены','',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
      });
  }

  deleteDb(){
    this.dbConnectionsService.delete(this.dbConnection.id)
      .subscribe( db => {
      this.dialogRef.close();
      this.snackBar.open('База данных удалена','',{
        duration: 3000,
        panelClass:'colorGreen',
        horizontalPosition:'right'
      });
    });;
  }

  close(){
    this.dialogRef.close();
  }

}
