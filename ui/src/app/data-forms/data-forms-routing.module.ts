import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExecuteDataFormComponent} from "./forms/execute-data-form/execute-data-form.component";
import {DataFormResolver} from "./forms/services/data-form.resolver";
import {MainComponent} from "../main.component";
import {AuthGuard} from "../login/auth.guard";
import {DataFormsListComponent} from "./forms/data-forms-list/data-forms-list.component";


const routes: Routes = [
  {
    path: '',
    component:  MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'data-forms', component: DataFormsListComponent,
        children: [
          { path: ':formId/execute',
            resolve: {dataForm: DataFormResolver},
            component: ExecuteDataFormComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataFormsRoutingModule { }
