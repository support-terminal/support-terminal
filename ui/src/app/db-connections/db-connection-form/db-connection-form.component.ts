import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {DbConnectionsService} from '../services/db-connections.service';
import DbConnection from '../models/DbConnection';
import DbConnectionType from '../models/DbConnectionType';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-db-connection-form',
  templateUrl: './db-connection-form.component.html',
  styleUrls: ['./db-connection-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DbConnectionFormComponent implements OnChanges{

  @Output() onSubmitEvent: EventEmitter<DbConnection> = new EventEmitter();
  @Input() initial: DbConnection;
  @Input() submitButtonText: string;

  private dbConnection: DbConnection = new DbConnection();
  private dbTypes: DbConnectionType[];

  constructor(private dbConnectionsService: DbConnectionsService,
              private snackBar: MatSnackBar) {
    this.dbConnectionsService.getDbTypes().subscribe(dbTypes => {
      this.dbTypes = dbTypes;
    });
  }

  onSubmit(): void {
    this.onSubmitEvent.emit(this.dbConnection);
  }

  checkConnection(): void {
    this.dbConnectionsService.checkConnection(this.dbConnection)
      .subscribe(res => {
        if (res.success) {
          this.snackBar.open('Удачно', '', {
            duration: 5000,
            panelClass: 'colorGreen',
            horizontalPosition: 'right'
          });
        } else {
          this.snackBar.open('Не удалось установить соединение', '', {
            duration: 5000,
            panelClass: 'colorRed',
            horizontalPosition: 'right'
          });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initial) {
      if (this.initial != null && this.initial !== undefined) {
        this.dbConnection = this.initial;
      }
    }
  }

}
