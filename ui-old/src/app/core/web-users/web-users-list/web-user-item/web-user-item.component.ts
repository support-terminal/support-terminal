import {Component, Input, ViewEncapsulation} from '@angular/core';

import Channel from '../../../bus/Сhannel';
import WebUser from '../../models/WebUser';
import {MessagingBusService} from '../../../api';


@Component({
  selector: 'web-user-item',
  templateUrl: './web-user-item.component.html',
  styleUrls: ['./web-user-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WebUserItemComponent{

  @Input() webUser: WebUser;

  constructor(private messagingBusService: MessagingBusService) {

  }

  edit(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_EDIT_WEB_USER_DIALOG, data:{webUserId: this.webUser.id}});
  }

}
