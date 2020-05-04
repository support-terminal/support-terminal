import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {Subscription} from 'rxjs';


import DataForm from '../models/DataForm';
import Channel from '../../bus/Сhannel';
import {DataFormsService} from '../services/data-forms.service';
import {MessagingBusService} from '../../../core/api';


@Component({
  selector: 'data-forms-list',
  templateUrl: './data-forms-list.component.html',
  styleUrls: ['./data-forms-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DataFormsListComponent implements OnDestroy{

  private dataFormsList: DataForm[];
  private dataFormsSubscription: Subscription;

  constructor(private messagingBusService: MessagingBusService,
              private dataFormsService: DataFormsService) {

    this.getDataFormsList();
    this.dataFormsSubscription = this.messagingBusService.getMessage().subscribe(message => {
      if(message.channel == Channel.DATA_FORMS_WERE_UPDATED){
        this.getDataFormsList();
      }
    });
  }

  ngOnDestroy(){
    this.dataFormsSubscription.unsubscribe();
  }

  add(){
    this.messagingBusService.sendMessage({channel:Channel.OPEN_ADD_DATA_FORM_DIALOG});
  }

  getDataFormsList(){
    this.dataFormsService.getAll().subscribe(dataForms => {
      this.dataFormsList = dataForms;
    });
  }


}
