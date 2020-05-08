import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotCommandsService} from '../../services/bot-commands.service';
import DbConnection from '../../models/DbConnection';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Rx from 'rxjs';
import Action from '../../models/Action';

@Component({
  selector: 'sql-command-form',
  templateUrl: './sql-command-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class SqlCommandFormComponent implements OnDestroy, OnChanges {

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
      this.actionForm.addControl('resultTemplate',  this.fb.control('', [Validators.required]));
    }
    if (changes['actionModel']) {
      if (this.actionModel != null) {
        this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
        this.actionForm.controls['select'].setValue(this.actionModel.select);
        this.actionForm.controls['type'].setValue('SQL_SELECT');
        this.actionForm.controls['resultTemplate'].setValue(this.actionModel.resultTemplate);
      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
