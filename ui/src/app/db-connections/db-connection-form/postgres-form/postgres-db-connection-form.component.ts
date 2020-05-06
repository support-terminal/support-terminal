import {Component, Input, ViewEncapsulation} from '@angular/core';
import DbConnection from '../../models/DbConnection';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-postgres-db-connection-form',
  templateUrl: './postgres-db-connection-form.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostgresDbConnectionFormComponent {
  @Input() dbConnection: DbConnection;
  show = false;
}
