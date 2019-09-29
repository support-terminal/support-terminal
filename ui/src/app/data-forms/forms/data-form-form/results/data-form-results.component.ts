import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";


@Component({
    selector: 'data-form-results',
    templateUrl: './data-form-results.component.html',
    encapsulation: ViewEncapsulation.Emulated
})

//FIXME  это Result Descriptor
export class DataFormResultsComponent {

    @Input() resultDescriptors: FormArray;

    constructor(private fb: FormBuilder) {

    }

    resultsTypes = [
        {name: 'В виде таблицы', type: 'TABLE_DATE_FORM_RESULT'}
    ];

    addResult(type: string){
        this.resultDescriptors.push(this.fb.group({
            order: [this.resultDescriptors.length+1, Validators.required ],
            type: [type, Validators.required ]
        }))
    }

    dropResult(index: number) {
        if (this.resultDescriptors.length > 0) {
            this.resultDescriptors.removeAt(index);
        }
    }

}
