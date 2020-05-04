import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {DataFormsService} from '../../services/data-forms.service';
import DbConnection from '../../models/DbConnection';
import * as Rx from 'rxjs';

@Component({
    selector: 'data-form-steps',
    templateUrl: './data-form-steps.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormStepsComponent implements OnDestroy{

    @Input() stepsForms: FormArray;

    private dataBaseSubscription: Rx.Subscription;
    private dataBases: DbConnection[] = new Array();

    constructor(private fb: FormBuilder,
                private dataFormsService: DataFormsService) {
        this.dataBaseSubscription = this.dataFormsService.dataBasesSubject.subscribe((dbs)=>{
            this.dataBases = dbs;
        });
    }

    stepsTypes = [
        {name: 'Выполнить SQL селект', type: 'SQL_REQUEST_DATE_FORM_STEP'}
    ];

    addStep(type: string){
        this.stepsForms.push(this.fb.group({
            order: [this.stepsForms.length+1, Validators.required ],
            type: [type, Validators.required ],
            dataBaseId: ['', Validators.required ],
            sql: ['', Validators.required ]
        }))
    }


    dropStep(index: number) {
        if (this.stepsForms.length > 0) {
            this.stepsForms.removeAt(index);
        }
    }

    ngOnDestroy() {
        this.dataBaseSubscription.unsubscribe();
    }
}
