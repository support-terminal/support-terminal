import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataFormsService} from "../services/data-forms.service";
import DataFormExecuteRequest from "../models/DataFormExecuteRequest";
import {MatSnackBar} from "@angular/material";
import DataFormParameterValue from "../models/DataFormParameterValue";
import DataForExecution from "../models/DataForExecution";
import DataForm from "../models/DataForm";

@Component({
    selector: 'execute-data-form',
    templateUrl: './execute-data-form.component.html',
    styleUrls: ['./execute-data-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ExecuteDataFormComponent {

    private dataForm: DataForm;
    private executionRequestForm: FormGroup;
    private dataForExecution: DataForExecution;

    private waitProccingFlag: boolean;

    constructor(private route: ActivatedRoute,
                private dataFormsService: DataFormsService,
                private fb: FormBuilder,
                private snackBar: MatSnackBar ) {
        this.dataForm = route.snapshot.data['dataForm'];


        let parametersValues: FormArray = this.fb.array([])

        if( Array.isArray(this.dataForm.parameters)
            && this.dataForm.parameters.length > 0){
            this.dataForm.parameters.forEach((v) => {
                parametersValues.push(this.fb.group({
                    label: [v.label, Validators.required],
                    value: ['', Validators.required],
                    type: [v.type, Validators.required]
                }));
            });
        }

        this.executionRequestForm = this.fb.group({
            parametersValues: parametersValues,
        });

    }


    stopRequest(): void {
        this.waitProccingFlag = false;
    }


    onSubmit(): void {
        let request: DataFormExecuteRequest = new DataFormExecuteRequest();


        let parametersValues: DataFormParameterValue[] = [];

        if( Array.isArray(this.executionRequestForm.value.parametersValues)
            && this.executionRequestForm.value.parametersValues.length > 0){
            this.executionRequestForm.value.parametersValues.forEach((v) => {
                parametersValues.push(
                    new DataFormParameterValue(v.label, v.type, v.value)
                );
            });
        }
        request.parametersValues = parametersValues;
        this.dataFormsService.execute(this.dataForm.id, request).subscribe( execution => {
            this.snackBar.open("Запущено исполнение", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
            //start cycle wait
            this.waitProccingFlag = true;
            this.waitResult(execution.id);
        });;
    }

    waitResult(executionId:string,): void {
        if(! this.waitProccingFlag){
            return;
        }
        this.dataFormsService.getExecutionById(executionId).subscribe( execution => {
            this.dataForExecution = execution;
            if(execution.endStatus != 'OK'){
                setTimeout(()=>{
                    this.waitResult(execution.id);
                }, 3000);
            }else {
                this.stopRequest();
            }
        });
    }
}
