import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BotCommandsService} from "../../services/bot-commands.service";
import DbConnection from "../../models/DbConnection";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as Rx from "rxjs";

@Component({
    selector: 'sql-in-excel-file-command',
    templateUrl: './sql-in-excel-file-command.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class SqlInExcelFileCommandComponent implements OnDestroy, OnChanges {

  @Input() botCommandForm: FormGroup;
  botCommandActionForm: FormGroup;
  private dataBases: DbConnection[];

  private dataBasesSubscription: Rx.Subscription;

  constructor(private botCommandsService: BotCommandsService,
              private fb: FormBuilder) {


    this.botCommandActionForm = this.fb.group({
      dataBaseId: ['', Validators.required],
      select: ['', Validators.required],
      resultTemplate: ['', Validators.required]
    });
    this.dataBasesSubscription = this.botCommandsService.dataBasesSubject.subscribe((dataBases) => {
      this.dataBases = dataBases;
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['botCommandForm']) {
      if (this.botCommandForm != null && this.botCommandForm != undefined) {


        this.botCommandForm.addControl(
          'action', this.botCommandActionForm);


      }
    }
  }

  ngOnDestroy() {
    this.dataBasesSubscription.unsubscribe();
  }

}
