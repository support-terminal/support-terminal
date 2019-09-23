import {Component, Input, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotMonitoringTask from "../../models/BotMonitoringTask";
import {BotMonitoringTasksService} from "../../services/bot-monitoring-tasks.service";
import DbConnection from "../../models/DbConnection";
import Condition from "../../models/Condition";
import * as Rx from "rxjs";
import {ControlContainer, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import Action from "../../../../bot-commands/commands/models/Action";
import {BotCommandsService} from "../../../../bot-commands/commands/services/bot-commands.service";

@Component({
  selector: 'select-one-numeric-value-task',
  templateUrl: './select-one-numeric-value-task.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  encapsulation: ViewEncapsulation.Emulated
})
export class SelectOneNumericValueTaskComponent implements OnDestroy {

  @Input() actionForm: FormGroup;
  @Input() actionModel: Action;
  private dataBases: DbConnection[];
  private dataBasesSubscription: Rx.Subscription;

  constructor(private botTasksService: BotMonitoringTasksService,
              private fb: FormBuilder) {
    this.dataBasesSubscription = this.botTasksService.dataBasesSubject.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['actionForm']) {
      this.actionForm.addControl('dataBaseId',  this.fb.control('', [Validators.required]));
      this.actionForm.addControl('select',  this.fb.control('', [Validators.required]));
      }
    if (changes['actionModel']) {
      if (this.actionModel != null) {
        this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
        this.actionForm.controls['select'].setValue(this.actionModel.select);
      }
    }
  }












  conditionsTypes = [
    {name: 'Больше чем', type: 'NUMERIC_MORE_THAN'},
    {name: 'Меньше чем', type: 'NUMERIC_LESS_THAN'},
    {name: 'Равно', type: 'NUMERIC_EQUAL'},
  ];
/*
  addCondition(type: string) {
    if (!Array.isArray(this.botTask.conditions)) {
      this.botTask.conditions = new Array();
    }
    this.botTask.conditions.push(new Condition(type))
  }

  dropCondition(index: number) {
    if (Array.isArray(this.botTask.conditions)) {
      this.botTask.conditions.splice(index, 1);
    }
  }
*/
  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }
}
