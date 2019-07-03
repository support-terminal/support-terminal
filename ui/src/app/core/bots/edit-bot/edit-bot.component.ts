import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";

import Bot from '../models/Bot';
import {BotsService} from "../services/bots.service";

@Component({
  selector: 'edit-bot',
  templateUrl: './edit-bot.component.html',
  styleUrls: ['./edit-bot.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditBotComponent {

  private bot: Bot;
  constructor(public dialogRef: MatDialogRef<EditBotComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private botsService: BotsService,
              private snackBar: MatSnackBar) {
       this.bot = data.bot;
  }

  edit(bot: Bot ):void{
    this.botsService.update(bot)
      .subscribe( bot => {
        this.snackBar.open("Изменения сохранены",'',{
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
        this.snackBar.open("Бот удален",'',{
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
