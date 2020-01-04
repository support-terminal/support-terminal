import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';

import {DbsListComponent} from "./dbs/dbs-list/dbs-list.component";
import {AddDbConnectionComponent} from "./dbs/add-db-connection/add-db-connection.component";
import {DbConnectionsService} from "./dbs/services/db-connections.service";
import {DbConnectionsBus} from "./dbs/services/db-connections.bus";
import {AngularMaterialModule} from "../angular.material.module";
import {DbItemComponent} from "./dbs/dbs-list/db-item/db-item.component";
import {DbConnectionFormComponent} from "./dbs/db-connection-form/db-connection-form.component";
import {EditDbConnectionComponent} from "./dbs/edit-db-connection/edit-db-connection.component";
import {BotsListComponent} from "./bots/bots-list/bots-list.component";
import {AddBotComponent} from "./bots/add-bot/add-bot.component";
import {EditBotComponent} from "./bots/edit-bot/edit-bot.component";
import {BotFormComponent} from "./bots/bot-form/bot-form.component";
import {BotItemComponent} from "./bots/bots-list/bot-item/bot-item.component";
import {BotsBus} from "./bots/services/bots.bus";
import {BotsService} from "./bots/services/bots.service";
import {PostgresDbConnectionFormComponent} from "./dbs/db-connection-form/postgres-form/postgres-db-connection-form.component";
import {OracleDbConnectionFormComponent} from "./dbs/db-connection-form/oracle-form/oracle-db-connection-form.component";
import {BotAccessListComponent} from "./bots/bot-access-list/bot-access-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {SettingsService} from "./settings/settings.service";
import {TelegramBotFormComponent} from "./bots/bot-form/telegram-form/telegram-bot-form.component";
import {SlackBotFormComponent} from "./bots/bot-form/slack-form/slack-bot-form.component";
import {AddWebUserComponent} from "./web-users/add-web-user/add-web-user.component";
import {EditWebUserComponent} from "./web-users/edit-web-user/edit-web-user.component";
import {WebUsersListComponent} from "./web-users/web-users-list/web-users-list.component";
import {WebUsersBus} from "./web-users/services/web-users.bus";
import {WebUserFormComponent} from "./web-users/web-user-form/web-user-form.component";
import {WebUserItemComponent} from "./web-users/web-users-list/web-user-item/web-user-item.component";
import {WebUsersService} from "./web-users/services/web-users.service";
import {MysqlDbConnectionFormComponent} from "./dbs/db-connection-form/mysql-form/mysql-db-connection-form.component";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {MessagingBusService} from "./api";
import {TextProcessorHandlerFormComponent} from "./processor/text/text-processor-handler-form/text-processor-handler-form.component";
import {AddTextProcessorHandlerComponent} from "./processor/text/add-text-processor-handler/add-text-processor-handler.component";
import {TextProcessorsHandlersListComponent} from "./processor/text/text-processor-handlers-list/text-processors-handlers-list.component";
import {TextProcessorHandlerItemComponent} from "./processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component";
import {TextProcessorsHandlersService} from "./processor/text/services/text-processors-handlers.service";
import {TextProcessorsHandlersBus} from "./processor/text/services/text-processors-handlers.bus";
import {EditTextProcessorHandlerComponent} from "./processor/text/edit-text-processor-handler/edit-text-processor-handler.component";
import {TextProcessorFindByKeyComponent} from "./processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component";
import {TextProcessorAddDelimiterComponent} from "./processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component";
import {TextProcessorFindNumbersWithPrefixComponent} from "./processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component";


@NgModule({
  imports: [

    CommonModule,
    AngularMaterialModule,
    CoreRoutingModule
  ],
  entryComponents: [
    AddTextProcessorHandlerComponent,
    EditTextProcessorHandlerComponent,
    AddDbConnectionComponent,
    EditDbConnectionComponent,
    AddBotComponent,
    EditBotComponent,
    BotAccessListComponent,
    AddWebUserComponent,
    EditWebUserComponent,
  ],
  declarations: [
    DbsListComponent,
    AddDbConnectionComponent,
    EditDbConnectionComponent,

    DbConnectionFormComponent,
    PostgresDbConnectionFormComponent,
    MysqlDbConnectionFormComponent,
    OracleDbConnectionFormComponent,
    DbItemComponent,

    BotsListComponent,
    AddBotComponent,
    EditBotComponent,
    BotFormComponent,
    BotItemComponent,
    SlackBotFormComponent,
    TelegramBotFormComponent,

    WebUsersListComponent,
    WebUserItemComponent,
    AddWebUserComponent,
    EditWebUserComponent,
    WebUserFormComponent,

    AddTextProcessorHandlerComponent,
    EditTextProcessorHandlerComponent,
    TextProcessorsHandlersListComponent,
    TextProcessorHandlerItemComponent,
    TextProcessorHandlerFormComponent,

    TextProcessorFindByKeyComponent,
    TextProcessorAddDelimiterComponent,
    TextProcessorFindNumbersWithPrefixComponent,

    BotAccessListComponent,
    SettingsComponent
  ],
  providers: [
    MatDialog,
    HttpClient,
    DbConnectionsService,
    DbConnectionsBus,
    WebUsersBus,
    WebUsersService,
    BotsBus,
    BotsService,
    TextProcessorsHandlersService,
    TextProcessorsHandlersBus,
    SettingsService]
})
export class CoreModule {

  constructor(private messagingBusService: MessagingBusService,
              private dbConnectionsBus: DbConnectionsBus,
              private webUsersBus: WebUsersBus,
              private textProcessorsHandlersBus: TextProcessorsHandlersBus,
              private botsBus: BotsBus) {
  }

}
