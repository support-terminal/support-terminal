import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BotCommandsListComponent} from './commands/bot-commands-list/bot-commands-list.component';
import {MainComponent} from '../main.component';
import {AuthGuard} from '../login/auth.guard';


const routes: Routes = [
  {
    path: '',
    component:  MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'bot-commands', component: BotCommandsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotCommandsRoutingModule { }
