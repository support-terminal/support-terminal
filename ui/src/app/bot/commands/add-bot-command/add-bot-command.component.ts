import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BotCommandsService} from '../services/bot-commands.service';
import BotCommand from '../../models/BotCommand';
import {MessagingBusService} from '../../../bus/messaging-bus.service';
import {Router} from '@angular/router';
import Channel from '../../../bus/Сhannel';

@Component({
  selector: 'app-add-bot-command',
  templateUrl: './add-bot-command.component.html',
  styleUrls: ['./add-bot-command.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddBotCommandComponent {

  constructor(private botCommandsService: BotCommandsService,
              private messagingBusService: MessagingBusService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  add(command: BotCommand): void {
    this.botCommandsService.add(command)
      .subscribe(cmd => {
        this.snackBar.open('Bot command "' + cmd.name + '"', '', {
          duration: 3000,
          panelClass: 'colorGreen',
          horizontalPosition: 'right'
        });
        this.messagingBusService.sendMessage({channel: Channel.BOT_COMMANDS_WERE_UPDATED});
        this.router.navigateByUrl('/bot-commands');
      });
  }

}
