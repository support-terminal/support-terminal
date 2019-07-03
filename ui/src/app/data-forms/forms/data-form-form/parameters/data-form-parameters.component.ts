import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";


@Component({
    selector: 'data-form-parameters',
    templateUrl: './data-form-parameters.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormParametersComponent {

    @Input() parametersForms: FormArray;

    constructor(private fb: FormBuilder) {

    }

    addParameter() {
        this.parametersForms.push(this.fb.group({
            label: ['', Validators.required ],  type: ['', Validators.required ]
        }))
    }

    dropParameter(index: number) {
        if (this.parametersForms.length > 0) {
            this.parametersForms.removeAt(index);
        }
    }

}
