import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {DbConnectionsService} from "../services/db-connections.service";
import DbConnection from '../models/DbConnection';

@Component({
  selector: 'add-db-connection',
  templateUrl: './add-db-connection.component.html',
  styleUrls: ['./add-db-connection.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddDbConnectionComponent {

  constructor(public dialogRef: MatDialogRef<AddDbConnectionComponent>,
              private dbConnectionsService: DbConnectionsService,
              private snackBar: MatSnackBar) { }

  addDbConnection(dbConnection: DbConnection):void{
    this.dbConnectionsService.add(dbConnection)
      .subscribe( db => {
        this.dialogRef.close();
        this.snackBar.open("Соединение добавлено",'',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
      });
  }

  close(){
    this.dialogRef.close();
  }

}
