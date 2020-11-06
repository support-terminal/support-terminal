import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../../angular.material.module';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {BotCommandsRoutingModule} from './bot-commands-routing.module';
import {BotCommandsService} from './services/bot-commands.service';
import {BotCommandsResolver} from './services/bot-commands.resolver';
import {AddBotCommandComponent} from './add-bot-command/add-bot-command.component';
import {BotCommandFormComponent} from './bot-command-form/bot-command-form.component';
import {SqlInExcelFileCommandComponent} from './bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component';
import {SqlSelectAsTextBotCommandFormComponent} from './bot-command-form/sql-select-as-text-bot-command/sql-select-as-text-bot-command-form.component';
import {EditBotCommandComponent} from './edit-bot-command/edit-bot-command.component';
import {BotCommandsListComponent} from './bot-commands-list/bot-commands-list.component';
import {BotCommandItemComponent} from './bot-commands-list/bot-command-item/bot-command-item.component';
import {JoinSqlSelectAsTextBotCommandFormComponent} from './bot-command-form/join-sql-select-as-text-bot-command/join-sql-select-as-text-bot-command-form.component';
import {SqlSelectFormComponent} from './bot-command-form/sql-select-form/sql-select-form.component';


@NgModule({
  imports: [
    AngularMaterialModule,
    CodemirrorModule,
    CommonModule,
    BotCommandsRoutingModule
  ],
  providers: [BotCommandsResolver, BotCommandsService],
  declarations: [
    AddBotCommandComponent, BotCommandFormComponent,
    SqlInExcelFileCommandComponent, SqlSelectAsTextBotCommandFormComponent,
    JoinSqlSelectAsTextBotCommandFormComponent, EditBotCommandComponent,
    SqlSelectFormComponent,
    BotCommandsListComponent,
    BotCommandItemComponent,
  ]
})
export class BotCommandsModule {
}
