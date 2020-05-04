import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

import NotificationApi from '../models/NotificationApi';
import {NotificationApiService} from '../services/notification-api.service';

@Component({
  selector: 'edit-bot',
  templateUrl: './edit-notification-api.component.html',
  styleUrls: ['./edit-notification-api.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditNotificationApiComponent {

  private bot: NotificationApi;
  constructor(public dialogRef: MatDialogRef<EditNotificationApiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private botsService: NotificationApiService,
              private snackBar: MatSnackBar) {
       this.bot = data.bot;
  }

  edit(bot: NotificationApi ):void{
    this.botsService.update(bot)
      .subscribe( bot => {
        this.snackBar.open('Изменения сохранены','',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
      });
  }

  delete(){
    this.botsService.delete(this.bot.id)
      .subscribe( db => {
      this.dialogRef.close();
        this.snackBar.open('Бот удален','',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
    });
  }

  close(){
    this.dialogRef.close();
  }

  changeCommandState(changeEvent: any) {
    if(changeEvent.checked){
      this.bot.state = 'ENABLED';
    }else{
      this.bot.state = 'DISABLED';
    }
  }

}
