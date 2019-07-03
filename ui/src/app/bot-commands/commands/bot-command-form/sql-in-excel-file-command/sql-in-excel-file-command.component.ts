import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import BotCommand from "../../models/BotCommand";
import {BotCommandsService} from "../../services/bot-commands.service";
import DbConnection from "../../models/DbConnection";
import {ControlContainer, NgForm} from "@angular/forms";
import * as Rx from "rxjs";

@Component({
    selector: 'sql-in-excel-file-command',
    templateUrl: './sql-in-excel-file-command.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
    encapsulation: ViewEncapsulation.Emulated
})
export class SqlInExcelFileCommandComponent implements OnDestroy{

    @Input() botCommand: BotCommand;
    private dataBases: DbConnection[];

    private dataBasesSubscription: Rx.Subscription;

    constructor(private botCommandsService: BotCommandsService) {
        this.dataBasesSubscription = this.botCommandsService.dataBasesSubject.subscribe((dataBases)=>{
            this.dataBases = dataBases;
        });
    }

    ngOnDestroy() {
        this.dataBasesSubscription.unsubscribe();
    }

}
