import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {WebUsersService} from '../services/web-users.service';
import WebUser from '../models/WebUser';


@Component({
  selector: 'add-web-user',
  templateUrl: './add-web-user.component.html',
  styleUrls: ['./add-web-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddWebUserComponent {

  constructor(public dialogRef: MatDialogRef<AddWebUserComponent>,
              private webUsersService: WebUsersService,
              private snackBar: MatSnackBar) { }

  addWebUser(webUser: WebUser):void{
    this.webUsersService.add(webUser)
      .subscribe( user => {
        this.dialogRef.close();
        this.snackBar.open('Пользователь добавлен','',{
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
