import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {MonitoringTasksListComponent} from './tasks/monitoring-tasks-list/monitoring-tasks-list.component';
import {MonitoringTasksService} from './tasks/services/monitoring-tasks.service';
import {BotTasksRoutingModule} from './bot-monitoring-task-routing.module';
import {MonitoringTaskItemComponent} from './tasks/monitoring-tasks-list/monitoring-task-item/monitoring-task-item.component';
import {MonitoringTaskFormComponent} from './tasks/monitoring-task-form/monitoring-task-form.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {AngularMaterialModule} from '../../angular.material.module';
import {AddMonitoringTaskComponent} from './tasks/add-monitoring-task/add-monitoring-task.component';
import {MonitoringTasksResolver} from './tasks/services/monitoring-tasks.resolver';
import {SqlSelectAsOneNumberTaskFormComponent} from './tasks/monitoring-task-form/sql-select-as-one-number-task/sql-select-as-one-number-task-form.component';
import {MonitoringTaskConditionItemComponent} from './tasks/monitoring-task-form/monitoring-task-condition-item/monitoring-task-condition-item.component';
import {MonitoringTaskNotifyItemComponent} from './tasks/monitoring-task-form/monitoring-task-notify-item/monitoring-task-notify-item.component';
import {EditMonitoringTaskComponent} from './tasks/edit-monitoring-task/edit-monitoring-task.component';


@NgModule({
  imports: [
    CodemirrorModule,
    CommonModule,
    BotTasksRoutingModule,
    AngularMaterialModule
  ],
  providers: [MonitoringTasksResolver, MonitoringTasksService],
  declarations: [
    AddMonitoringTaskComponent,
    EditMonitoringTaskComponent,
    MonitoringTaskFormComponent,
    SqlSelectAsOneNumberTaskFormComponent,
    MonitoringTaskConditionItemComponent,
    MonitoringTaskNotifyItemComponent,
    MonitoringTasksListComponent,
    MonitoringTaskItemComponent,
  ]
})
export class BotMonitoringTasksModule {}

