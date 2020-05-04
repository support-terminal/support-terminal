import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'data-form-table-results',
    templateUrl: './data-form-table-results.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class TableResultsComponent {

    @Input() tableResultForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    addColumn() {
       let columns = <FormArray>this.tableResultForm.controls['columns']
       if(columns == null){
            columns =  this.fb.array([]);
            this.tableResultForm.addControl('columns', columns);
       }
       columns.push(this.fb.group({
            order: [columns.length+1, Validators.required ],
            header: ['', Validators.required ],
            resultPath: ['', Validators.required ],
            joinRule: ['', Validators.required ]
       }));
    }

    dropColumn(index: number) {
        let columns: FormArray = <FormArray>this.tableResultForm.get('columns');
        if (columns.length > 0) {
            columns.removeAt(index);
        }
    }

}
