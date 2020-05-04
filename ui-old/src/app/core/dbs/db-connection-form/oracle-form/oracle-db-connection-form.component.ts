import {Component, Input, ViewEncapsulation} from '@angular/core';
import DbConnection from '../../models/DbConnection';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'oracle-db-connection-form',
  templateUrl: './oracle-db-connection-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class OracleDbConnectionFormComponent {
  @Input() dbConnection: DbConnection;
}
