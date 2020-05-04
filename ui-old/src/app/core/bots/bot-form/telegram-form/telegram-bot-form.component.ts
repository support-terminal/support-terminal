import {Component, Input, ViewEncapsulation} from '@angular/core';
import TelegramBot from '../../models/TelegramBot';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'telegram-bot-form',
  templateUrl: './telegram-bot-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class TelegramBotFormComponent {
  @Input() bot: TelegramBot;
}
