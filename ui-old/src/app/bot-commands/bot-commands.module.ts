import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BotCommandsListComponent} from './commands/bot-commands-list/bot-commands-list.component';
import {BotCommandsService} from './commands/services/bot-commands.service';
import {BotCommandsRoutingModule} from './bot-commands-routing.module';
import {BotCommandItemComponent} from './commands/bot-commands-list/bot-command-item/bot-command-item.component';
import {AddBotCommandComponent} from './commands/add-bot-command/add-bot-command.component';
import {EditBotCommandComponent} from './commands/edit-bot-command/edit-bot-command.component';
import {BotCommandsBus} from './commands/services/bot-commands.bus';
import {BotCommandFormComponent} from './commands/bot-command-form/bot-command-form.component';
import {SqlInExcelFileCommandComponent} from './commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component';
import {SqlCommandFormComponent} from './commands/bot-command-form/sql-command/sql-command-form.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {AngularMaterialModule} from '../angular.material.module';

@NgModule({
    imports: [
        AngularMaterialModule,
        CodemirrorModule,
        CommonModule,
        BotCommandsRoutingModule
    ],
    providers: [ BotCommandsBus, BotCommandsService],
    declarations: [
       AddBotCommandComponent, BotCommandFormComponent,
       SqlInExcelFileCommandComponent, SqlCommandFormComponent, EditBotCommandComponent,
        BotCommandsListComponent,
        BotCommandItemComponent,
    ],
     entryComponents: [ AddBotCommandComponent, EditBotCommandComponent]
})
export class BotCommandsModule {
  constructor(private botCommandsBus: BotCommandsBus) { }
}
