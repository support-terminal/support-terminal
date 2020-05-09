import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../main.component';
import {AuthGuard} from '../../login/auth.guard';
import {BotCommandsListComponent} from './bot-commands-list/bot-commands-list.component';
import {AddBotCommandComponent} from './add-bot-command/add-bot-command.component';
import {BotCommandsResolver} from './services/bot-commands.resolver';
import {EditBotCommandComponent} from './edit-bot-command/edit-bot-command.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'bot-commands', component: BotCommandsListComponent},
      {path: 'bot-commands/add', component: AddBotCommandComponent},
      {
        path: 'bot-commands/:id/edit',
        resolve: {dbConnection: BotCommandsResolver},
        component: EditBotCommandComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotCommandsRoutingModule {
}
