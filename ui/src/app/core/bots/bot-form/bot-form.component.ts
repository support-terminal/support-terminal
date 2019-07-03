import {Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import Bot from "../models/Bot";
import BotType from "../models/BotType";
import {BotsService} from "../services/bots.service";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'bot-form',
  templateUrl: './bot-form.component.html',
  styleUrls: ['./bot-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotFormComponent {

  @Output() onSubmitEvent: EventEmitter<Bot> = new EventEmitter();
  @Input()  initial: Bot;
  @Input()  submitButtonText: string;

  private bot: Bot = new Bot();
  private botTypes: BotType[];

  constructor(private botsService: BotsService,
              private snackBar: MatSnackBar) {
    this.botsService.getBotTypes().subscribe(botTypes => {
      this.botTypes = botTypes;
    });
  }

  onSubmit(): void {
    this.onSubmitEvent.emit(this.bot);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initial']) {
      if (this.initial != null && this.initial != undefined) {
        this.bot = this.initial;
      }
    }
  }

}
