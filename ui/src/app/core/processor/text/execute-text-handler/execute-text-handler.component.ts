import {Component, NgZone, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TextProcessorsHandlersService} from "../services/text-processors-handlers.service";
import TextProcessorHandler from "../models/TextProcessorHandler";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

import {take} from 'rxjs/operators';

@Component({
  selector: 'execute-text-handler',
  templateUrl: './execute-text-handler.component.html',
  styleUrls: ['./execute-text-handler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExecuteTextHandlerComponent {

  private textProcessorHandler: TextProcessorHandler;
  private executionRequestForm: FormGroup;
  private resultText: string;

  constructor(private route: ActivatedRoute,
              private textProcessorsHandlersService: TextProcessorsHandlersService,
              private fb: FormBuilder) {
    this.textProcessorHandler = route.snapshot.data['textProcessorHandler'];

    this.executionRequestForm = this.fb.group({
      text: ['', Validators.required],
      handlerId: [this.textProcessorHandler.id, Validators.required],
    });

  }

  onSubmit(): void {

    this.textProcessorsHandlersService.execute(this.executionRequestForm.value)
      .subscribe(executionResult => {
        this.resultText = executionResult.result
      });
  }

}
