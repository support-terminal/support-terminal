import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BotCommandsListComponent} from "./commands/bot-commands-list/bot-commands-list.component";


const routes: Routes = [
  { path: '', component: BotCommandsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotCommandsRoutingModule { }
