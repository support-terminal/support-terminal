import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotificationsApiRoutingModule} from './notifications-api-routing.module';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {AngularMaterialModule} from '../angular.material.module';
import {NotificationApiService} from './services/notification-api.service';
import {NotificationApiListComponent} from './notifications-api-list/notification-api-list.component';
import {NotificationApiListItemComponent} from './notifications-api-list/notification-api-list-item/notification-api-list-item.component';
import {AddNotificationApiComponent} from './add-notification-api/add-notification-api.component';
import {NotificationApiFormComponent} from './notification-api-form/notification-api-form.component';
import {TelegramBotFormComponent} from './notification-api-form/telegram-form/telegram-bot-form.component';
import {SlackBotFormComponent} from './notification-api-form/slack-form/slack-bot-form.component';
import {EditNotificationApiComponent} from './edit-notification-api/edit-notification-api.component';
import {NotificationApiResolver} from './services/notification-api.resolver';

@NgModule({
    imports: [
        AngularMaterialModule,
        CodemirrorModule,
        CommonModule,
        NotificationsApiRoutingModule
    ],
    providers: [ NotificationApiService, NotificationApiResolver],
    declarations: [
      NotificationApiListComponent,
      NotificationApiListItemComponent,

      AddNotificationApiComponent,
      EditNotificationApiComponent,
      NotificationApiFormComponent,
      TelegramBotFormComponent,
      SlackBotFormComponent
    ]
})
export class NotificationsApiModule {}
