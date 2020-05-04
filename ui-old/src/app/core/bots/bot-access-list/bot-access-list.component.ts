import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {BotsService} from '../services/bots.service';
import JoinRequest from '../models/JoinRequest';

@Component({
  selector: 'bot-access-list',
  templateUrl: './bot-access-list.component.html',
  styleUrls: ['./bot-access-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotAccessListComponent {

  private botId: string;
  private joinRequests: JoinRequest[];

  constructor(public dialogRef: MatDialogRef<BotAccessListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private botsService: BotsService,
              private snackBar: MatSnackBar) {
    this.botId = data.botId;
    this.refreshBot();
  }


  close() {
    this.dialogRef.close();
  }


  accept(joinId: string) {
    this.botsService.accept(this.botId, joinId)
      .subscribe(res => {
        this.snackBar.open('Пользователь одобрен', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.refreshBot();
      });
  }

  denied(joinId: string) {
    this.botsService.denied(this.botId, joinId)
      .subscribe(res => {
        this.snackBar.open('Пользователь отклонен', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.refreshBot();
      });
  }

  refreshBot(){
    this.botsService.get(this.botId)
      .subscribe(bot => {
        this.joinRequests = bot.joinRequests;
      });
  }

}
