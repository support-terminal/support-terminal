import {Component, Input, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import DataForExecution from '../../models/DataForExecution';


@Component({
    selector: 'data-form-view-results',
    templateUrl: './data-form-view-results.component.html',
    styleUrls: ['./data-form-view-results.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DataFormViewResultsComponent implements OnDestroy {

    @Input() dataForExecution: DataForExecution;
    private showTable: boolean = false;

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['dataForExecution']) {
            if (this.dataForExecution != null
                && this.dataForExecution != undefined
                && this.dataForExecution.endStatus == 'OK') {
                this.showTable = true;
            }
        }
    }

    ngOnDestroy() {

    }

}
