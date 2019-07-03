import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataFormsListComponent} from "./forms/data-forms-list/data-forms-list.component";
import {ExecuteDataFormComponent} from "./forms/execute-data-form/execute-data-form.component";
import {DataFormResolver} from "./forms/services/data-form.resolver";


const routes: Routes = [
  { path: '', component: DataFormsListComponent },
  { path: ':formId/execute',
      resolve: {dataForm: DataFormResolver},
      component: ExecuteDataFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataFormsRoutingModule { }
