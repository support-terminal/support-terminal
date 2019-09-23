import {Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotMonitoringTask from "../models/BotMonitoringTask";
import Notify from "../models/Notify";
import BotCommand from "../../../bot-commands/commands/models/BotCommand";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BotCommandsService} from "../../../bot-commands/commands/services/bot-commands.service";


@Component({
  selector: 'bot-task-form',
  templateUrl: './bot-task-form.component.html',
  styleUrls: ['./bot-task-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotTaskFormComponent {

  @Output() onSubmitEvent: EventEmitter<BotMonitoringTask> = new EventEmitter();
  @Input() initial: BotMonitoringTask;
  @Input() submitButtonText: string;

  private botTaskModel: BotMonitoringTask = new BotMonitoringTask();
  private botTaskForm: FormGroup;

  onSubmit(): void {
    this.botTaskModel = this.botTaskForm.value;
 //   this.botTaskModel.action = this.botTaskForm.controls['action'].value;
    this.onSubmitEvent.emit(this.botTaskModel);
  }

  constructor(private botCommandsService: BotCommandsService,
              private fb: FormBuilder) {

    this.initForm();
  }

  initForm() {
    this.botTaskForm = this.fb.group({
      name: ['', Validators.required ],
      cronFrequency: ['', Validators.required ],
      action: this.fb.group({
        type: [''],
      })
    });
  }

  actionTypes = [
    {name: 'Выборка единичного числового значения из базы данных', type: 'SQL_SELECT_ONE_NUMERIC_VALUE'},
  ];

  cronFrequencies = [
    {label: 'Каждую минут', frequency: 'EVERY_1_MINUTE'},
    {label: 'Каждые 5 минут', frequency: 'EVERY_5_MINUTES'},
    {label: 'Каждые 15 минут', frequency: 'EVERY_15_MINUTES'},
    {label: 'Каждый час', frequency: 'EVERY_HOUR'}
  ];

  notifyTypes = [
    {name: 'Уведомить через Slack', type: 'SLACK_BOT_API'}
  ];

/*
  ngOnChanges(changes: SimpleChanges) {
/!*    if (changes['initial']) {
      if (this.initial != null && this.initial != undefined) {
        this.botTask = this.initial;
      }
    }*!/
  }

  addNotify(type: string) {
    if (!Array.isArray(this.botTaskForm.value.notifyList)) {
      this.botTaskForm.notifyList = new Array();
    }
    this.botTask.notifyList.push(new Notify(type))
  }

  dropNotify(index: number) {
/!*    if (Array.isArray(this.botTask.notifyList)) {
      this.botTask.notifyList.splice(index, 1);
    }*!/
  }
*/


}
