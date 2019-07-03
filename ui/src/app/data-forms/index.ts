import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularMaterialModule} from "./angular.material.module";

import {DataFormsListComponent} from "./forms/data-forms-list/data-forms-list.component";
import {DataFormsService} from "./forms/services/data-forms.service";
import {DataFormsRoutingModule} from "./data-forms-routing.module";
import {DataFormItemComponent} from "./forms/data-forms-list/data-form-item/data-form-item.component";
import {AddDataFromComponent} from "./forms/add-data-form/add-data-form.component";
import {EditDataFormComponent} from "./forms/edit-data-form/edit-data-form.component";
import {DataFormsBus} from "./forms/services/data-forms.bus";
import {DataFormFormComponent} from "./forms/data-form-form/data-form-form.component";

import 'codemirror/mode/sql/sql';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {DataFormParametersComponent} from "./forms/data-form-form/parameters/data-form-parameters.component";
import {DataFormParameterItemComponent} from "./forms/data-form-form/parameters/data-form-parameter-item.component";
import {DataFormStepItemComponent} from "./forms/data-form-form/steps/data-form-step-item.component";
import {DataFormStepsComponent} from "./forms/data-form-form/steps/data-form-steps.component";
import {ExecuteDataFormComponent} from "./forms/execute-data-form/execute-data-form.component";
import {DataFormResolver} from "./forms/services/data-form.resolver";
import {DataFormExecuteParametersComponent} from "./forms/execute-data-form/parameters-values/data-form-execute-parameters.component";
import {StringParameterFieldComponent} from "./forms/execute-data-form/parameters-values/string-parameter-field.component";
import {DataFormResultsComponent} from "./forms/data-form-form/results/data-form-results.component";
import {TableResultsComponent} from "./forms/data-form-form/results/types/data-form-table-results.component";
import {DataFormViewResultsComponent} from "./forms/execute-data-form/results/data-form-view-results.component";


@NgModule({
  imports: [
    CodemirrorModule,
    CommonModule,
    DataFormsRoutingModule,
    AngularMaterialModule
  ],
  providers: [DataFormsService, DataFormResolver, DataFormsBus, DataFormsService],
  declarations: [
    AddDataFromComponent, DataFormFormComponent, EditDataFormComponent,
    DataFormParametersComponent, DataFormParameterItemComponent, DataFormStepsComponent,
    DataFormStepItemComponent, DataFormResultsComponent, TableResultsComponent,
    ExecuteDataFormComponent,
    DataFormViewResultsComponent,
    DataFormsListComponent,
    DataFormItemComponent,
    DataFormExecuteParametersComponent,
    StringParameterFieldComponent
  ],
  entryComponents: [AddDataFromComponent, EditDataFormComponent]
})
export class DataFormsModule {
  constructor(private dataFormsBus: DataFormsBus) {
  }
}
