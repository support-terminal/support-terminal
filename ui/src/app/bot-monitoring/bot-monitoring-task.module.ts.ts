import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularMaterialModule} from '../angular.material.module';

import {BotTasksListComponent} from './tasks/bot-tasks-list/bot-tasks-list.component';
import {BotMonitoringTasksService} from './tasks/services/bot-monitoring-tasks.service';
import {BotTasksRoutingModule} from './bot-monitoring-task-routing.module';
import {BotTaskItemComponent} from './tasks/bot-tasks-list/bot-task-item/bot-task-item.component';
import {AddBotTaskComponent} from './tasks/add-bot-task/add-bot-task.component';
import {EditBotTaskComponent} from './tasks/edit-bot-task/edit-bot-task.component';
import {BotMonitoringTasksBus} from './tasks/services/bot-monitoring-tasks.bus';
import {BotTaskFormComponent} from './tasks/bot-task-form/bot-task-form.component';
import {SelectOneNumericValueTaskComponent} from './tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {BotMonitoringTaskConditionItem} from './tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component';
import {BotMonitoringTaskNotifyItemComponent} from './tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component';


@NgModule({
    imports: [
        CodemirrorModule,
        CommonModule,
        BotTasksRoutingModule,
        AngularMaterialModule
    ],
    providers: [ BotMonitoringTasksBus,BotMonitoringTasksService],
    declarations: [
      AddBotTaskComponent, BotTaskFormComponent,
      SelectOneNumericValueTaskComponent, EditBotTaskComponent,
      BotMonitoringTaskConditionItem, BotMonitoringTaskNotifyItemComponent,

  BotTasksListComponent,
        BotTaskItemComponent,
    ],
  entryComponents: [ AddBotTaskComponent, EditBotTaskComponent]
})
export class BotMonitoringTasksModule {
  constructor(private botTasksBus: BotMonitoringTasksBus){ }
}

