import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from "rxjs";


import WebUser from "../models/WebUser";
import Channel from "../../bus/Сhannel";
import {WebUsersService} from "../services/web-users.service";
import {MessagingBusService} from "../../api";


@Component({
  selector: 'web-users-list',
  templateUrl: './web-users-list.component.html',
  styleUrls: ['./web-users-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WebUsersListComponent implements OnDestroy{

  private webUsersList: WebUser[];
  private webUsersListSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private webUsersService: WebUsersService) {

    this.getDbsList();
    this.webUsersListSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.WEB_USERS_WERE_UPDATED){
        this.getDbsList();
      }
    });
  }

  ngOnDestroy(){
    this.webUsersListSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_WEB_USER_DIALOG});
  }

  getDbsList(){
    this.webUsersService.getAll().subscribe(users => {
      this.webUsersList = users;
    });
  }


}
