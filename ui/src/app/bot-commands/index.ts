import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularMaterialModule} from "./angular.material.module";

import {BotCommandsListComponent} from "./commands/bot-commands-list/bot-commands-list.component";
import {BotCommandsService} from "./commands/services/bot-commands.service";
import {BotCommandsRoutingModule} from "./bot-commands-routing.module";
import {BotCommandItemComponent} from "./commands/bot-commands-list/bot-command-item/bot-command-item.component";
import {AddBotCommandComponent} from "./commands/add-bot-command/add-bot-command.component";
import {EditBotCommandComponent} from "./commands/edit-bot-command/edit-bot-command.component";
import {BotCommandsBus} from "./commands/services/bot-commands.bus";
import {BotCommandFormComponent} from "./commands/bot-command-form/bot-command-form.component";
import {SqlInExcelFileCommandComponent} from "./commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component";
import {SqlCommandFormComponent} from "./commands/bot-command-form/sql-command/sql-command-form.component";
import 'codemirror/mode/sql/sql';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';


@NgModule({
    imports: [
        CodemirrorModule,
        CommonModule,
        BotCommandsRoutingModule,
        AngularMaterialModule
    ],
    providers: [ BotCommandsService],
    declarations: [
        BotCommandsListComponent,
        BotCommandItemComponent,
    ],
})
export class BotCommandsModule {

}


@NgModule({
    imports: [
        CodemirrorModule,
        CommonModule,
        AngularMaterialModule
    ],
    providers: [ BotCommandsBus, BotCommandsService],
    declarations: [AddBotCommandComponent, BotCommandFormComponent,
        SqlInExcelFileCommandComponent, SqlCommandFormComponent, EditBotCommandComponent],
    entryComponents: [ AddBotCommandComponent, EditBotCommandComponent]
})
export class DaemonBotCommandsModule {
    constructor(private botCommandsBus: BotCommandsBus) { }
}
