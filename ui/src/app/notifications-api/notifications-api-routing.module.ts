import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main.component';
import {AuthGuard} from '../login/auth.guard';
import {NotificationApiListComponent} from './notifications-api-list/notification-api-list.component';
import {AddNotificationApiComponent} from './add-notification-api/add-notification-api.component';
import {EditNotificationApiComponent} from './edit-notification-api/edit-notification-api.component';
import {NotificationApiResolver} from './services/notification-api.resolver';


const routes: Routes = [
  {
    path: '',
    component:  MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'notifications-api', component: NotificationApiListComponent},
      { path: 'notifications-api/add', component: AddNotificationApiComponent},
      { path: 'notifications-api/:id/edit',
        resolve: {notificationApi: NotificationApiResolver},
        component: EditNotificationApiComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsApiRoutingModule { }
