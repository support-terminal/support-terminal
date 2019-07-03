import {Component, Input, ViewEncapsulation} from '@angular/core';
import DbConnection from "../../models/DbConnection";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'mysql-db-connection-form',
  templateUrl: './mysql-db-connection-form.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  encapsulation: ViewEncapsulation.Emulated
})
export class MysqlDbConnectionFormComponent{
  @Input() dbConnection: DbConnection;
}
