import {Component, Input, ViewEncapsulation} from '@angular/core';
import SlackBotApi from '../../models/SlackBotApi';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-slack-bot-form',
  templateUrl: './slack-bot-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class SlackBotFormComponent {
  @Input() bot: SlackBotApi;
}
