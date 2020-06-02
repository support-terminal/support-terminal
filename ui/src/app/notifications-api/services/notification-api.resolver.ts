import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Inject} from '@angular/core';
import {NotificationApiService} from './notification-api.service';
import NotificationApi from '../models/NotificationApi';


export class NotificationApiResolver implements Resolve<NotificationApi> {


  constructor(@Inject(NotificationApiService)
              private notificationApiService: NotificationApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
      const id = route.paramMap.get('id');
      return new Promise((resolve, reject) => {
          this.notificationApiService.get(id).subscribe(handler => {
              resolve(handler);
          });
      });
  }

}
