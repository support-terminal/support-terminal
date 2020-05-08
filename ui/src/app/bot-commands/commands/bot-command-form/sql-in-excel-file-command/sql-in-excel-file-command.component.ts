import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotCommandsService} from '../../services/bot-commands.service';
import DbConnection from '../../models/DbConnection';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import Action from '../../models/Action';

@Component({
    selector: 'sql-in-excel-file-command',
    templateUrl: './sql-in-excel-file-command.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class SqlInExcelFileCommandComponent implements OnDestroy, OnChanges {

  @Input() actionModel: Action;
  @Input() actionForm: FormGroup;
  private dataBases: DbConnection[];
  private dataBasesSubscription: Rx.Subscription;

  constructor(private botCommandsService: BotCommandsService,
              private fb: FormBuilder) {
    this.dataBasesSubscription = this.botCommandsService.dataBasesSubject.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actionForm']) {
      this.actionForm.addControl('dataBaseId',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('select',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('fileNameTemplate',  this.fb.control('', [Validators.required]));
    }
    if (changes['actionModel']) {
      if (this.actionModel != null) {
        this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
        this.actionForm.controls['select'].setValue(this.actionModel.select);
        this.actionForm.controls['type'].setValue('SQL_SELECT_IN_EXCEL_FILE');
        this.actionForm.controls['fileNameTemplate'].setValue(this.actionModel.fileNameTemplate);
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
