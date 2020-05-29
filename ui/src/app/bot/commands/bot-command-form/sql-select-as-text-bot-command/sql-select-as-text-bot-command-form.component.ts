import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotCommandsService} from '../../services/bot-commands.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import Action from '../../../models/Action';
import DbConnection from '../../../../db-connections/models/DbConnection';
import {DbConnectionsService} from '../../../../db-connections/services/db-connections.service';

@Component({
  selector: 'app-sql-select-as-text-bot-command-form',
  templateUrl: './sql-select-as-text-bot-command-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class SqlSelectAsTextBotCommandFormComponent implements OnDestroy, OnChanges {

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
      this.actionForm.addControl('dbConnectionId',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('select',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('resultTemplate',  this.fb.control('', [Validators.required]));
    }
    if (changes.actionModel) {
      if (this.actionModel != null) {
        this.actionForm.controls.dbConnectionId.setValue(this.actionModel.dbConnectionId);
        this.actionForm.controls.select.setValue(this.actionModel.select);
        this.actionForm.controls.type.setValue('SQL_SELECT_AS_TEXT');
        this.actionForm.controls.resultTemplate.setValue(this.actionModel.resultTemplate);
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
