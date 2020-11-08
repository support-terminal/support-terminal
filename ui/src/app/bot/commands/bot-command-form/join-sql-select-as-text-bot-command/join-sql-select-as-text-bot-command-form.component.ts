import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotCommandsService} from '../../services/bot-commands.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import Action from '../../../models/Action';
import DbConnection from '../../../../db-connections/models/DbConnection';
import {DbConnectionsService} from '../../../../db-connections/services/db-connections.service';
import ConditionType from '../../../models/ConditionType';

@Component({
  selector: 'app-join-sql-select-as-text-bot-command-form',
  templateUrl: './join-sql-select-as-text-bot-command-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class JoinSqlSelectAsTextBotCommandFormComponent implements OnDestroy, OnChanges {

  @Input() actionModel: Action;
  @Input() actionForm: FormGroup;
  private dataBases: DbConnection[];
  private dataBasesSubscription: Rx.Subscription;

  constructor(private botCommandsService: BotCommandsService,
              private dbConnectionsService: DbConnectionsService,
              private fb: FormBuilder) {
  this.dataBasesSubscription = this.dbConnectionsService.dbConnectionsList.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.actionForm) {
      this.actionForm.addControl('queries', this.fb.array([]));
      this.actionForm.addControl('select', this.fb.control('', [Validators.required]));
      this.actionForm.addControl('resultTemplate',  this.fb.control('', [Validators.required]));
    }
    if (changes.actionModel) {
      if (this.actionModel != null) {
        this.actionForm.setControl('queries', this.fb.array([]));
        if (Array.isArray(this.actionModel.queries) && this.actionModel.queries.length > 0) {
          this.actionModel.queries.forEach((s) => {
            ( this.actionForm.controls.queries as FormArray).push(
              this.fb.group({
                name: [s.name, Validators.required],
                select: [s.select, Validators.required],
                dbConnectionId: [s.dbConnectionId, Validators.required]
              }));
          });
        }
        this.actionForm.controls.type.setValue('JOIN_SQL_SELECTS_AS_TEXT');
        this.actionForm.controls.select.setValue(this.actionModel.select);
        this.actionForm.controls.resultTemplate.setValue(this.actionModel.resultTemplate);
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

  addQuery() {
    (this.actionForm.controls.queries as FormArray).push(
      this.fb.group({
        name: ['', Validators.required],
        select: ['', Validators.required],
        dbConnectionId: ['', Validators.required]
      })
    );
  }

  dropQuery(index: number) {
    if ((this.actionForm.controls.queries as FormArray).length !== 0) {
      (this.actionForm.controls.queries as FormArray).removeAt(index);
    }
  }


}
