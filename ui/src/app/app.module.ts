import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {MainComponent} from './main.component';

import {NgModule} from '@angular/core';
import {AuthService, ConfigService, Ng2UiAuthModule, SharedService} from 'ng2-ui-auth';
import {EventsService} from './enevts/services/events.service';
import {AuthGuard} from './login/auth.guard';
import {EventsConsoleComponent} from './enevts/events-console.component';
import {LoginComponent} from './login/login.component';
import {AngularSplitModule} from 'angular-split';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular.material.module';
import 'codemirror/mode/sql/sql';
import {NotificationsApiModule} from './notifications-api/notifications-api.module';
import {MessagingBusService} from './bus/messaging-bus.service';
import {DbConnectionsModule} from './db-connections/db-connections.module';
import {SettingsComponent} from './settings/settings.component';
import {SettingsService} from './settings/settings.service';
import {BotCommandsModule} from './bot/commands/bot-commands.module';
import {BotMonitoringTasksModule} from './bot/monitoring/bot-monitoring-task.module.ts';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    EventsConsoleComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    AngularSplitModule,
    CodemirrorModule,
    Ng2UiAuthModule.forRoot({}),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    // features
    NotificationsApiModule,
    DbConnectionsModule,
    BotCommandsModule,
    BotMonitoringTasksModule
  ],
  providers: [
    AuthGuard,
    EventsService,
    AuthService,
    ConfigService,
    MessagingBusService,
    SharedService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
