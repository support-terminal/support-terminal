import {Inject} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import DbConnection from '../models/DbConnection';
import {DbConnectionsService} from './db-connections.service';


export class DbConnectionsResolver implements Resolve<DbConnection> {


  constructor(@Inject(DbConnectionsService)
              private dbConnectionsService: DbConnectionsService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.paramMap.get('id');
    return new Promise((resolve, reject) => {
      this.dbConnectionsService.get(id).subscribe(handler => {
        resolve(handler);
      });
    });
  }

}
