import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BotCommandsService} from '../services/bot-commands.service';
import BotCommand from '../../models/BotCommand';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagingBusService} from '../../../bus/messaging-bus.service';
import Channel from '../../../bus/Сhannel';


@Component({
  selector: 'app-edit-bot-command',
  templateUrl: './edit-bot-command.component.html',
  styleUrls: ['./edit-bot-command.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EditBotCommandComponent {

  private command: BotCommand;

  constructor(private route: ActivatedRoute,
              private messagingBusService: MessagingBusService,
              private router: Router,
              private botCommandsService: BotCommandsService,
              private snackBar: MatSnackBar) {
    this.command = route.snapshot.data.command;

  }

  edit(command: BotCommand): void {
    this.botCommandsService.update(command)
      .subscribe(cmd => {
        this.snackBar.open('Saved', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.BOT_COMMANDS_WERE_UPDATED});
      });
  }

  delete() {
    this.botCommandsService.delete(this.command.id)
      .subscribe(command => {
        this.snackBar.open('Deleted', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.BOT_COMMANDS_WERE_UPDATED});
        this.router.navigateByUrl('/bot-commands');
      });
  }
}
