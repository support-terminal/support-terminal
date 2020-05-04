import {MatDialog} from '@angular/material';
import {AddWebUserComponent} from '../add-web-user/add-web-user.component';
import {Subscription} from 'rxjs';
import Channel from '../../bus/Сhannel';

import {EditWebUserComponent} from '../edit-web-user/edit-web-user.component';
import {WebUsersService} from './web-users.service';
import {MessagingBusService} from '../../api';
import {Inject} from '@angular/core';


export class WebUsersBus {

  subscription: Subscription;

  constructor(@Inject(MatDialog)public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private webUsersService: WebUsersService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_WEB_USER_DIALOG){
        this.openAddUserDialog();
      }else if(message.channel == Channel.OPEN_EDIT_WEB_USER_DIALOG){
          this.openEditUserDialog(message.data.webUserId);
      }

    });
  }

  openAddUserDialog(): void {
    let dialogRef = this.dialog.open(AddWebUserComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.WEB_USERS_WERE_UPDATED})
    });
  }


  openEditUserDialog(webUserId:string): void {
    this.webUsersService.get(webUserId)
      .subscribe(db => {
        let dialogRef = this.dialog.open(EditWebUserComponent, {
          width: '700px',
          data:{dbConnection: db}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.WEB_USERS_WERE_UPDATED})
        });

      });
  }


}
