import {Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotMonitoringTask from "../models/BotMonitoringTask";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    this.onSubmitEvent.emit(this.botTaskModel);
  }

  constructor(private botCommandsService: BotCommandsService,
              private fb: FormBuilder) {

    this.initForm();
  }

  initForm() {
    this.botTaskForm = this.fb.group({
      id: [''],
      state: [''],
      name: ['', Validators.required],
      cronFrequency: this.fb.group({
        type: ['']
      }),
      action: this.fb.group({
        type: ['']
      }),
      conditions: this.fb.array([]),
      notifyList: this.fb.array([])
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

  addNotify(type: string) {
    (<FormArray>this.botTaskForm.controls['notifyList']).push(this.fb.group({
      type: [type, Validators.required]
    }))
  }

  dropNotify(index: number) {
    if ((<FormArray>this.botTaskForm.controls['notifyList']).length != 0) {
      (<FormArray>this.botTaskForm.controls['notifyList']).removeAt(index);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initial']) {
      if (this.initial != null) {
        this.botTaskModel = this.initial;
        this.botTaskForm.controls['id'].setValue(this.botTaskModel.id);
        this.botTaskForm.controls['name'].setValue(this.botTaskModel.name);
        this.botTaskForm.controls['state'].setValue(this.botTaskModel.state);

        (<FormGroup>this.botTaskForm.controls['cronFrequency']).controls['type'].setValue(this.botTaskModel.cronFrequency.type);
        (<FormGroup>this.botTaskForm.controls['action']).controls['type'].setValue(this.botTaskModel.action.type);

        if (Array.isArray(this.botTaskModel.conditions) && this.botTaskModel.conditions.length > 0) {
          this.botTaskModel.conditions.forEach((c) => {
            (<FormArray>this.botTaskForm.controls['conditions']).push(this.fb.group({
              type: [c.type, Validators.required],
              expectedValue: [c.expectedValue, Validators.required]
            }))
          })
        }

        if (Array.isArray(this.botTaskModel.notifyList) && this.botTaskModel.notifyList.length > 0) {
          this.botTaskModel.notifyList.forEach((n) => {
            (<FormArray>this.botTaskForm.controls['notifyList']).push(this.fb.group({
              type: [n.type, Validators.required],
              messageTemplate: [n.messageTemplate, Validators.required]
            }))
          })
        }

      }
    }
  }

  addCondition(type: string) {
    (<FormArray>this.botTaskForm.controls['conditions']).push(this.fb.group({
      type: [type, Validators.required],
      expectedValue: ['', Validators.required]
    }))
  }

  dropCondition(index: number) {
    if ((<FormArray>this.botTaskForm.controls['conditions']).length != 0) {
      (<FormArray>this.botTaskForm.controls['conditions']).removeAt(index);
    }
  }

  conditionsTypes = [
    {name: 'Больше чем', type: 'NUMERIC_MORE_THAN'},
    {name: 'Меньше чем', type: 'NUMERIC_LESS_THAN'},
    {name: 'Равно', type: 'NUMERIC_EQUAL'},
  ];


}
