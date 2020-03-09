import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from "./app.component";
import {MainComponent} from "./main.component";

import {NgModule} from "@angular/core";
import {AuthService, ConfigService, Ng2UiAuthModule, SharedService} from "ng2-ui-auth";
import {EventsService} from "./enevts/services/events.service";
import {AuthGuard} from "./login/auth.guard";
import {EventsConsoleComponent} from "./enevts/events-console.component";
import {LoginComponent} from "./login/login.component";
import {AngularSplitModule} from "angular-split";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {AngularMaterialModule} from "./angular.material.module";
import {MessagingBusService} from "./core/api";
import {BotCommandsModule} from "./bot-commands/bot-commands.module";
import {BotMonitoringTasksModule} from "./bot-monitoring/bot-monitoring-task.module.ts";

import 'codemirror/mode/sql/sql';
import {DataFormsModule} from "./data-forms/data-forms.module";

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    EventsConsoleComponent,
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
    CoreModule,
    BotMonitoringTasksModule,
    DataFormsModule,
    BotCommandsModule
  ],
  providers: [
    AuthGuard,
    EventsService,
    AuthService,
    ConfigService,
    SharedService,
    MessagingBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
