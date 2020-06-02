import {Component, Input, ViewEncapsulation} from '@angular/core';
import TelegramBotApi from '../../models/TelegramBotApi';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-telegram-bot-form',
  templateUrl: './telegram-bot-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class TelegramBotFormComponent {
  @Input() bot: TelegramBotApi;
}
