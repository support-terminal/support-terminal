import {MatDialog} from '@angular/material';

import {Subscription} from 'rxjs';
import Channel from '../../bus/Сhannel';


import {DataFormsService} from './data-forms.service';
import {AddDataFromComponent} from '../add-data-form/add-data-form.component';
import {EditDataFormComponent} from '../edit-data-form/edit-data-form.component';
import {MessagingBusService} from '../../../core/api';
import {Inject} from '@angular/core';


export class DataFormsBus {

  private subscription: Subscription;


  constructor(@Inject(MatDialog) public dialog: MatDialog,
              private messagingBusService: MessagingBusService,
              private dataFormsService: DataFormsService) {
    this.subscription = this.messagingBusService.getMessage().subscribe(message => {

      if(message.channel == Channel.OPEN_ADD_DATA_FORM_DIALOG){
        this.openAddDialog();
      }else if(message.channel == Channel.OPEN_EDIT_DATA_FORM_DIALOG){
          this.openEditDialog(message.data.id);
      }
    });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddDataFromComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.messagingBusService.sendMessage({channel: Channel.DATA_FORMS_WERE_UPDATED})
    });
  }


  openEditDialog(id:string): void {
    this.dataFormsService.get(id)
      .subscribe(dataForm => {
        let dialogRef = this.dialog.open(EditDataFormComponent, {
          width: '1000px',
          data:{
              dataForm: dataForm
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.messagingBusService.sendMessage({channel: Channel.DATA_FORMS_WERE_UPDATED})
        });

      });
  }

}
