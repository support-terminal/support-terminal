import {Component, Input, ViewEncapsulation} from '@angular/core';
import BotCommand from '../../../models/BotCommand';


@Component({
  selector: 'app-bot-command-item',
  templateUrl: './bot-command-item.component.html',
  styleUrls: ['./bot-command-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandItemComponent {

  @Input() command: BotCommand;

}
