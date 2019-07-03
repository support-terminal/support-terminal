import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
    selector: 'data-form-parameter-item',
    templateUrl: './data-form-parameter-item.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormParameterItemComponent {

    @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
    @Input() parameterForm: FormGroup;

    parametersTypes = [
        {name: 'Строка', type: 'STRING_PARAMETER'},
     //   {name: 'Число', type: 'INTEGER_PARAMETER'},
    //    {name: 'Дата', type: 'DATE_PARAMETER'},
  //      {name: 'Выборка из значений', type: 'SELECT_PARAMETER'},
    ];

    submitRemoveMe(): void {
        this.removeMeEvent.emit();
    }
}
