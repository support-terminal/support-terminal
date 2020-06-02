import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MessagingBusService} from '../../../bus/messaging-bus.service';
import DbConnection from '../../models/DbConnection';


@Component({
  selector: 'app-db-item',
  templateUrl: './db-item.component.html',
  styleUrls: ['./db-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DbItemComponent {

  @Input() dbConnection: DbConnection;

  constructor(private messagingBusService: MessagingBusService) {

  }

}
