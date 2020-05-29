import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import MonitoringTask from '../models/MonitoringTask';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationApiService} from '../../../../notifications-api/services/notification-api.service';
import CronFrequency from '../../../models/CronFrequency';
import {MonitoringTasksService} from '../services/monitoring-tasks.service';
import ActionType from '../../../models/ActionType';
import ConditionType from '../../../models/ConditionType';


@Component({
  selector: 'app-bot-monitoring-task-form',
  templateUrl: './monitoring-task-form.component.html',
  styleUrls: ['./monitoring-task-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MonitoringTaskFormComponent implements OnChanges {

  @Output() onSubmitEvent: EventEmitter<MonitoringTask> = new EventEmitter();
  @Input() initial: MonitoringTask;
  @Input() submitButtonText: string;

  private botTaskModel: MonitoringTask = new MonitoringTask();
  public botTaskForm: FormGroup;
  public cronFrequencies: CronFrequency[];
  public conditionsTypes: ConditionType[];
  public actionTypes: ActionType[];


  constructor(private monitoringTasksService: MonitoringTasksService,
              private notificationApiService: NotificationApiService,
              private fb: FormBuilder) {

    this.initForm();
    this.initDictionaries();
  }

  initForm() {
    this.botTaskForm = this.fb.group({
      id: [''],
      enabled: [''],
      name: ['', Validators.required],
      cron: ['', Validators.required],
      action: this.fb.group({
        type: [''],
      }),
      conditions: this.fb.array([]),
      notifyList: this.fb.array([])
    });
  }

  initDictionaries() {
    this.monitoringTasksService.getCronFrequencies().subscribe(crons => {
      this.cronFrequencies = crons;
    });
    this.monitoringTasksService.getTypes().subscribe(types => {
      this.actionTypes = types;
    });
    this.monitoringTasksService.getConditionTypes().subscribe(types => {
      this.conditionsTypes = types;
    });
  }

  onSubmit(): void {
    this.botTaskModel = this.botTaskForm.value;
    this.onSubmitEvent.emit(this.botTaskModel);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initial) {
      if (this.initial != null) {
        this.botTaskModel = this.initial;
        this.botTaskForm.controls.id.setValue(this.botTaskModel.id);
        this.botTaskForm.controls.name.setValue(this.botTaskModel.name);
        this.botTaskForm.controls.enabled.setValue(this.botTaskModel.enabled);

        this.botTaskForm.controls.cron.setValue(this.botTaskModel.cron);
        (this.botTaskForm.controls.action as FormGroup).controls.type.setValue(this.botTaskModel.action.type);

        if (Array.isArray(this.botTaskModel.conditions) && this.botTaskModel.conditions.length > 0) {
          this.botTaskModel.conditions.forEach((c) => {
            (this.botTaskForm.controls.conditions as FormArray).push(
              this.fb.group({
                type: [c.type, Validators.required],
                expectedValue: [c.expectedValue, Validators.required]
              }));
          });
        }

        if (Array.isArray(this.botTaskModel.notifyList) && this.botTaskModel.notifyList.length > 0) {
          this.botTaskModel.notifyList.forEach((n) => {
            (this.botTaskForm.controls.notifyList as FormArray).push(
              this.fb.group({
                notificationApiId: [n.notificationApiId, Validators.required],
                messageTemplate: [n.messageTemplate, Validators.required]
              }));
          });
        }

      }
    }
  }


  addCondition(conditionType: ConditionType) {
    (this.botTaskForm.controls.conditions as FormArray).push(
      this.fb.group({
        label: [conditionType.label, Validators.required],
        type: [conditionType.type, Validators.required],
        expectedValue: ['', Validators.required]
      })
    );
  }

  dropCondition(index: number) {
    if ((this.botTaskForm.controls.conditions as FormArray).length !== 0) {
      (this.botTaskForm.controls.conditions as FormArray).removeAt(index);
    }
  }

  addNotify() {
    (this.botTaskForm.controls.notifyList as FormArray).push(
      this.fb.group({
        notificationApiId: ['', Validators.required],
        messageTemplate: ['', Validators.required]
      })
    );
  }

  dropNotify(index: number) {
    if ((this.botTaskForm.controls.notifyList as FormArray).length !== 0) {
      (this.botTaskForm.controls.notifyList as FormArray).removeAt(index);
    }
  }

}
