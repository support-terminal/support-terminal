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
import {BotCommandsService} from '../services/bot-commands.service';
import * as Rx from 'rxjs';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import BotCommand from '../../models/BotCommand';
import Bot from '../../models/Bot';
import {NotificationApiService} from '../../../notifications-api/services/notification-api.service';
import ActionType from '../../models/ActionType';


@Component({
  selector: 'app-bot-command-form',
  templateUrl: './bot-command-form.component.html',
  styleUrls: ['./bot-command-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandFormComponent implements OnDestroy, OnChanges {
  @Output() onSubmitEvent: EventEmitter<BotCommand> = new EventEmitter();

  @Input() initial: BotCommand;
  @Input() submitButtonText: string;
  private botsSubscription: Rx.Subscription;

  private bots: Bot[];

  private botCommandModel: BotCommand = new BotCommand();

  private botCommandForm: FormGroup;

  public actionTypes: ActionType[];

  constructor(private botCommandsService: BotCommandsService,
              private notificationApiService: NotificationApiService,
              private fb: FormBuilder) {

    this.initForm();
    this.botCommandsService.getTypes().subscribe(types => {
      this.actionTypes = types;
    });
    this.botsSubscription = this.notificationApiService.notificationApiList.subscribe((bots) => {
      this.bots = bots;
    });
  }


  initForm() {
    this.botCommandForm = this.fb.group({
      name: ['', Validators.required],
      cmd: ['', Validators.required],
      botIds: [null, Validators.compose([Validators.minLength(1), Validators.required])],
      action: this.fb.group({
        type: [''],
      })
    });
  }

  onSubmit(): void {
    this.botCommandModel = this.botCommandForm.value;
    this.botCommandModel.action = this.botCommandForm.controls.action.value;
    this.onSubmitEvent.emit(this.botCommandModel);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initial) {
      if (this.initial != null) {

        this.botCommandModel = this.initial;

        const id = this.botCommandForm.controls.id as FormArray;
        if (id == null) {
          this.botCommandForm.addControl('id', this.fb.control({}));
        }
        this.botCommandForm.controls.id.setValue(this.botCommandModel.id);
        this.botCommandForm.controls.name.setValue(this.botCommandModel.name);
        this.botCommandForm.controls.cmd.setValue(this.botCommandModel.cmd);
        this.botCommandForm.controls.botIds.setValue(this.botCommandModel.botIds);
        (this.botCommandForm.controls.action as FormGroup).controls.type.setValue(this.botCommandModel.action.type);

      }
    }
  }

  ngOnDestroy() {
    this.botsSubscription.unsubscribe();
  }


}
