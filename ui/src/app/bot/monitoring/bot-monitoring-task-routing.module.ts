import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonitoringTasksListComponent} from './tasks/monitoring-tasks-list/monitoring-tasks-list.component';
import {AuthGuard} from '../../login/auth.guard';
import {MainComponent} from '../../main.component';
import {AddMonitoringTaskComponent} from './tasks/add-monitoring-task/add-monitoring-task.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'bot-monitoring', component: MonitoringTasksListComponent},
      {path: 'bot-monitoring/add', component: AddMonitoringTaskComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotTasksRoutingModule {
}
