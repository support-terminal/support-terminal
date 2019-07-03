import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BotTasksListComponent} from "./tasks/bot-tasks-list/bot-tasks-list.component";


const routes: Routes = [
  { path: '', component: BotTasksListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotTasksRoutingModule { }
