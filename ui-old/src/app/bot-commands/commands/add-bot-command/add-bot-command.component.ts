import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import BotCommand from '../models/BotCommand';
import {BotCommandsService} from '../services/bot-commands.service';

@Component({
  selector: 'add-bot-command',
  templateUrl: './add-bot-command.component.html',
  styleUrls: ['./add-bot-command.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddBotCommandComponent {

  constructor(public dialogRef: MatDialogRef<AddBotCommandComponent>,
              private botCommandsService: BotCommandsService,
              private snackBar: MatSnackBar ) { }

  add(command: BotCommand ):void{
    this.botCommandsService.add(command)
      .subscribe( command => {
        this.dialogRef.close();
          this.snackBar.open('Команда добавлена', '', {
              duration: 3000,
              panelClass: 'colorGreen',
              horizontalPosition: 'right'
          });
      });
  }

  close(){
    this.dialogRef.close();
  }


}
