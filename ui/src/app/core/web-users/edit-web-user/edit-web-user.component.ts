import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {WebUsersService} from "../services/web-users.service";
import WebUser from '../models/WebUser';

@Component({
  selector: 'edit-web-user',
  templateUrl: './edit-web-user.component.html',
  styleUrls: ['./edit-web-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditWebUserComponent {

  private webUser: WebUser;
  constructor(public dialogRef: MatDialogRef<EditWebUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private webUsersService: WebUsersService,
              private snackBar: MatSnackBar) {
       this.webUser = data.dbConnection;
  }

  editWebUser(webUser: WebUser ):void{
    this.webUsersService.update(webUser)
      .subscribe( user => {
        this.snackBar.open("Изменения сохранены",'',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
      });
  }

  deleteWebUser(){
    this.webUsersService.delete(this.webUser.id)
      .subscribe( user => {
      this.dialogRef.close();
      this.snackBar.open("Пользователь удален",'',{
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
