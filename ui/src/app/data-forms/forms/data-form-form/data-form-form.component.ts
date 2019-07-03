import {Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import DataForm from "../models/DataForm";
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'data-form-form',
    templateUrl: './data-form-form.component.html',
    styleUrls: ['./data-form-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormFormComponent implements OnDestroy {

    @Output() onSubmitEvent: EventEmitter<DataForm> = new EventEmitter();
    @Input() initial: DataForm;
    @Input() submitButtonText: string;

    private dataFormModel: DataForm = new DataForm();
    private dataFormForm: FormGroup;


    constructor(private fb: FormBuilder) {
        this.initForm();
    }

    onSubmit(): void {
        this.dataFormModel.name = this.dataFormForm.value.name;
        this.dataFormModel.description = this.dataFormForm.value.description;
        this.dataFormModel.parameters = this.dataFormForm.value.parameters;
        this.dataFormModel.steps = this.dataFormForm.value.steps;
        this.dataFormModel.resultDescriptors = this.dataFormForm.value.resultDescriptors;
        this.onSubmitEvent.emit(this.dataFormModel);
    }

    initForm() {
        this.dataFormForm = this.fb.group({
            name: ['', Validators.required ],
            description: ['', Validators.required ],
            parameters: this.fb.array([]),
            steps: this.fb.array([]),
            resultDescriptors: this.fb.array([])
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.dataFormModel = this.initial;

                let parametersFormsArray: FormArray = this.fb.array([])

                if( Array.isArray(this.dataFormModel.parameters)
                    && this.dataFormModel.parameters.length > 0){
                    this.dataFormModel.parameters.forEach((v) => {
                        parametersFormsArray.push(this.fb.group({
                            label: [v.label, Validators.required ],  type: [ v.type, Validators.required ]
                        }))
                    })
                }

                let stepsFormsArray: FormArray = this.fb.array([])

                if( Array.isArray(this.dataFormModel.steps)
                    && this.dataFormModel.steps.length > 0){
                    this.dataFormModel.steps.forEach((step) => {
                        stepsFormsArray.push(this.fb.group({
                            order: [step.order, Validators.required ],
                            type: [step.type, Validators.required ],
                            dataBaseId: [step.dataBaseId, Validators.required ],
                            sql: [step.sql, Validators.required ]
                        }))
                    })
                }


                let resultsFormsArray: FormArray = this.fb.array([]);
                if( Array.isArray(this.dataFormModel.resultDescriptors)
                    && this.dataFormModel.resultDescriptors.length > 0){
                    this.dataFormModel.resultDescriptors.forEach((result) => {

                        let columns = this.fb.array([]);
                        if( Array.isArray(result.columns)){
                            result.columns.forEach((col) => {
                                columns.push(this.fb.group({
                                    order: [col.order],
                                    header: [col.header, Validators.required],
                                    resultPath: [col.resultPath, Validators.required],
                                    joinRule: [col.joinRule, Validators.required]
                                }));
                            });
                        }

                        resultsFormsArray.push(this.fb.group({
                            order: [result.order],
                            type: [result.type, Validators.required ],
                            columns: columns,
                        }))
                    })
                }




                this.dataFormForm = this.fb.group({
                    name: [this.initial.name, Validators.required ],
                    description: [this.initial.description, Validators.required ],
                    parameters: parametersFormsArray,
                    steps: stepsFormsArray,
                    resultDescriptors: resultsFormsArray
                });
            }
        }
    }

    ngOnDestroy() {

    }

}
