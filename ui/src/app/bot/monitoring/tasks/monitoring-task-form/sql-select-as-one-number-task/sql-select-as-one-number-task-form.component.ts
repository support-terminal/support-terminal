import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import DbConnection from '../../../../../db-connections/models/DbConnection';
import Action from '../../../../models/Action';
import {DbConnectionsService} from '../../../../../db-connections/services/db-connections.service';

@Component({
  selector: 'app-sql-select-as-one-number-task-form',
  templateUrl: './sql-select-as-one-number-task-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class SqlSelectAsOneNumberTaskFormComponent implements OnDestroy, OnChanges {

  @Input() actionModel: Action;
  @Input() actionForm: FormGroup;
  private dataBases: DbConnection[];
  private dataBasesSubscription: Rx.Subscription;

  constructor(private dbConnectionsService: DbConnectionsService,
              private fb: FormBuilder) {

  this.dataBasesSubscription = this.dbConnectionsService.dbConnectionsList.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.actionForm) {
      this.actionForm.addControl('dbConnectionId',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('select',  this.fb.control('', [Validators.required]));
    }
    if (changes.actionModel) {
      if (this.actionModel != null) {
        this.actionForm.controls.dbConnectionId.setValue(this.actionModel.dbConnectionId);
        this.actionForm.controls.select.setValue(this.actionModel.select);
        this.actionForm.controls.type.setValue('SQL_SELECT_AS_ONE_NUMBER');
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
