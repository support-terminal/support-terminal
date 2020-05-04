import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
    selector: 'string-parameter-field',
    templateUrl: './string-parameter-field.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class StringParameterFieldComponent {

    @Input() stringParameter: FormGroup;

    constructor(private fb: FormBuilder) {

    }

}
