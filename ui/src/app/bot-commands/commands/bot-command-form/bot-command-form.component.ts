import {Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import BotCommand from "../models/BotCommand";
import Bot from "../models/Bot";
import {BotCommandsService} from "../services/bot-commands.service";
import * as Rx from "rxjs";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'bot-command-form',
    templateUrl: './bot-command-form.component.html',
    styleUrls: ['./bot-command-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class BotCommandFormComponent implements OnDestroy {

    @Output() onSubmitEvent: EventEmitter<BotCommand> = new EventEmitter();
    @Input() initial: BotCommand;
    @Input() submitButtonText: string;

    private botsSubscription: Rx.Subscription;

    private bots: Bot[];

    private botCommandModel: BotCommand = new BotCommand();
    private botCommandForm: FormGroup;

    constructor(private botCommandsService: BotCommandsService,
                private fb: FormBuilder) {

        this.initForm();
        this.botsSubscription = this.botCommandsService.botsSubject.subscribe((bots)=>{
            this.bots = bots;
        });
    }

    initForm() {
      this.botCommandForm = this.fb.group({
        name: ['', Validators.required ],
        cmd: ['', Validators.required ],
        botIds: [null, Validators.compose([Validators.minLength(1), Validators.required])],
        action: this.fb.group({
          type: [''],
        })
      });
    }

    onSubmit(): void {
      this.botCommandModel = this.botCommandForm.value;
      this.botCommandModel.action = this.botCommandForm.controls['action'].value;
      this.onSubmitEvent.emit(this.botCommandModel);
    }

    actionTypes = [
        {name: 'Выборка SQL', type: 'SQL_SELECT'},
        {name: 'Выборка SQL в excel файл', type: 'SQL_SELECT_IN_EXCEL_FILE'},
    ];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['initial']) {
            if (this.initial != null) {

              this.botCommandModel = this.initial;

              let id = <FormArray>this.botCommandForm.controls['id']
              if(id == null){
                this.botCommandForm.addControl('id', this.fb.control({}));
              }
              this.botCommandForm.controls['id'].setValue(this.botCommandModel.id);
              this.botCommandForm.controls['name'].setValue(this.botCommandModel.name);
              this.botCommandForm.controls['cmd'].setValue(this.botCommandModel.cmd);
              this.botCommandForm.controls['botIds'].setValue(this.botCommandModel.botIds);
              (<FormGroup>this.botCommandForm.controls['action']).controls['type'].setValue(this.botCommandModel.action.type)

            }
        }
    }

    ngOnDestroy() {
        this.botsSubscription.unsubscribe();
    }


}
