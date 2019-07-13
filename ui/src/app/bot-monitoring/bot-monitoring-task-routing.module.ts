import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BotTasksListComponent} from "./tasks/bot-tasks-list/bot-tasks-list.component";
import {MainComponent} from "../main.component";
import {AuthGuard} from "../login/auth.guard";


const routes: Routes = [
  {
    path: '',
    component:  MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'bot-monitoring', component: BotTasksListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotTasksRoutingModule { }
