import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DbsListComponent} from "./dbs/dbs-list/dbs-list.component";
import {BotsListComponent} from "./bots/bots-list/bots-list.component";
import {AuthGuard} from "../login/auth.guard";
import {MainComponent} from "../main.component";
import {SettingsComponent} from "./settings/settings.component";
import {WebUsersListComponent} from "./web-users/web-users-list/web-users-list.component";
import {TextProcessorsHandlersListComponent} from "./processor/text/text-processor-handlers-list/text-processors-handlers-list.component";
import {ExecuteTextHandlerComponent} from "./processor/text/execute-text-handler/execute-text-handler.component";
import {TextProcessHandlerResolver} from "./processor/text/services/text-process-handler.resolver";


const routes: Routes = [
  {
    path: '',
    component:  MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'text-processor-handlers-list', component: TextProcessorsHandlersListComponent},
      { path: 'text-processor-handlers-list/:id/execute',
        resolve: {textProcessorHandler: TextProcessHandlerResolver},
        component: ExecuteTextHandlerComponent },

      { path: 'dbs-list', component: DbsListComponent },
      { path: 'web-users-list', component: WebUsersListComponent },
      { path: 'bots-list', component: BotsListComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
