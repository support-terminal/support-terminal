import {Component, Input, ViewEncapsulation} from '@angular/core';
import SlackBot from "../../models/SlackBot";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'slack-bot-form',
  templateUrl: './slack-bot-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class SlackBotFormComponent {
  @Input() bot: SlackBot;
}
