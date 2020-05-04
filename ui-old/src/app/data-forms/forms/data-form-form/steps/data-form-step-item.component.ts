import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import DbConnection from '../../models/DbConnection';


@Component({
    selector: 'data-form-step-item',
    templateUrl: './data-form-step-item.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormStepItemComponent {

    @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
    @Input() stepForm: FormGroup;
    @Input() dataBases: DbConnection[];


    submitRemoveMe(): void {
        this.removeMeEvent.emit();
    }
}
