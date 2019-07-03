import {Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotCommand from "../models/BotCommand";
import Bot from "../models/Bot";
import {BotCommandsService} from "../services/bot-commands.service";
import * as Rx from "rxjs";


@Component({
    selector: 'bot-command-form',
    templateUrl: './bot-command-form.component.html',
    styleUrls: ['./bot-command-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandFormComponent implements OnDestroy {

    @Output() onSubmitEvent: EventEmitter<BotCommand> = new EventEmitter();
    @Input() initial: BotCommand;
    @Input() submitButtonText: string;

    private botsSubscription: Rx.Subscription;

    private bots: Bot[];
    private botCommand: BotCommand = new BotCommand();

    constructor(private botCommandsService: BotCommandsService) {
        this.botsSubscription = this.botCommandsService.botsSubject.subscribe((bots)=>{
            this.bots = bots;
        });
    }

    onSubmit(): void {
        this.onSubmitEvent.emit(this.botCommand);
    }

    actionTypes = [
        {name: 'Выборка SQL', type: 'SQL_SELECT'},
        {name: 'Выборка SQL в excel файл', type: 'SQL_SELECT_IN_EXCEL_FILE'},
    ];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.botCommand = this.initial;
            }
        }
    }

    ngOnDestroy() {
        this.botsSubscription.unsubscribe();
    }


}
