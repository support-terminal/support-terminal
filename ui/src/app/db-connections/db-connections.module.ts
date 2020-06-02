import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DbConnectionsRoutingModule} from './db-connections-routing.module';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {AngularMaterialModule} from '../angular.material.module';
import {AddDbConnectionComponent} from './add-db-connection/add-db-connection.component';
import {DbsListComponent} from './dbs-list/dbs-list.component';
import {DbConnectionsService} from './services/db-connections.service';
import {DbConnectionsResolver} from './services/db-connections.resolver';
import {EditDbConnectionComponent} from './edit-db-connection/edit-db-connection.component';
import {DbConnectionFormComponent} from './db-connection-form/db-connection-form.component';
import {OracleDbConnectionFormComponent} from './db-connection-form/oracle-form/oracle-db-connection-form.component';
import {MysqlDbConnectionFormComponent} from './db-connection-form/mysql-form/mysql-db-connection-form.component';
import {PostgresDbConnectionFormComponent} from './db-connection-form/postgres-form/postgres-db-connection-form.component';
import {DbItemComponent} from './dbs-list/db-item/db-item.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    CodemirrorModule,
    CommonModule,
    DbConnectionsRoutingModule
  ],
  providers: [DbConnectionsService, DbConnectionsResolver],
  declarations: [
    DbsListComponent,
    DbItemComponent,
    AddDbConnectionComponent,
    EditDbConnectionComponent,
    DbConnectionFormComponent,
    PostgresDbConnectionFormComponent,
    OracleDbConnectionFormComponent,
    MysqlDbConnectionFormComponent
  ]
})
export class DbConnectionsModule {
}
