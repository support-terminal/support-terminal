import {Component, Input, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';


@Component({
    selector: 'data-form-execute-parameters',
    templateUrl: './data-form-execute-parameters.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormExecuteParametersComponent {

    @Input() parametersValues: FormArray;

    constructor(private fb: FormBuilder) {
        console.log(this.parametersValues);
    }

    ngOnChanges(changes: SimpleChanges) {
       console.log(changes);
       console.log(this.parametersValues);
    }

}
