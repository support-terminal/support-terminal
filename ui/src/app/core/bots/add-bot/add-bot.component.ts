import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {BotsService} from "../services/bots.service";
import Bot from "../models/Bot";

@Component({
  selector: 'add-bot-connection',
  templateUrl: './add-bot.component.html',
  styleUrls: ['./add-bot.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddBotComponent {

  constructor(public dialogRef: MatDialogRef<AddBotComponent>,
              private botsService: BotsService,
              private snackBar: MatSnackBar ) { }

  addBot(bot: Bot ):void{
    this.botsService.add(bot)
      .subscribe( bot => {
        this.dialogRef.close();
        this.snackBar.open("API бот добавлен",'',{
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
