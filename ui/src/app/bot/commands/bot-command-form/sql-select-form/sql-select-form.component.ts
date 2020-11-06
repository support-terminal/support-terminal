import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {BotCommandsService} from '../../services/bot-commands.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import DbConnection from '../../../../db-connections/models/DbConnection';
import {DbConnectionsService} from '../../../../db-connections/services/db-connections.service';
import SqlSelect from '../../../models/SqlSelect';
import ConditionType from '../../../models/ConditionType';
import {MonitoringTasksService} from '../../../monitoring/tasks/services/monitoring-tasks.service';

@Component({
  selector: 'app-sql-select-form',
  templateUrl: './sql-select-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class SqlSelectFormComponent implements OnDestroy, OnChanges {

  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();
  @Input() sqlSelectModel: SqlSelect;
  @Input() sqlSelectForm: FormGroup;
  @Input() index: number;

  private dataBases: DbConnection[];
  private dataBasesSubscription: Rx.Subscription;

  constructor(private botCommandsService: BotCommandsService,
              private dbConnectionsService: DbConnectionsService,
              private fb: FormBuilder) {
  this.dataBasesSubscription = this.dbConnectionsService.dbConnectionsList.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }

  submitRemoveMe(): void {
    this.removeMeEvent.emit(this.index);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sqlSelectModel) {
      if (this.sqlSelectModel != null) {
        this.sqlSelectForm.controls.name.setValue(this.sqlSelectModel.name);
        this.sqlSelectForm.controls.dbConnectionId.setValue(this.sqlSelectModel.dbConnectionId);
        this.sqlSelectForm.controls.select.setValue(this.sqlSelectModel.select);
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
