import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main.component';
import {AuthGuard} from '../login/auth.guard';
import {DbConnectionsResolver} from './services/db-connections.resolver';
import {AddDbConnectionComponent} from './add-db-connection/add-db-connection.component';
import {DbsListComponent} from './dbs-list/dbs-list.component';
import {EditDbConnectionComponent} from './edit-db-connection/edit-db-connection.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'db-connections', component: DbsListComponent},
      {path: 'db-connections/add', component: AddDbConnectionComponent},
      {
        path: 'db-connections/:id/edit',
        resolve: {dbConnection: DbConnectionsResolver},
        component: EditDbConnectionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbConnectionsRoutingModule {
}
