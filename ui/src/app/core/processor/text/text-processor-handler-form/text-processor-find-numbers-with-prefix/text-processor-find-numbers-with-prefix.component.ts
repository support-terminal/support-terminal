import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import TextProcessorFindNumberWithPrefix from "../../models/TextProcessorFindNumberWithPrefix";

@Component({
  selector: 'text-processor-find-numbers-with-prefix',
  templateUrl: './text-processor-find-numbers-with-prefix.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorFindNumbersWithPrefixComponent implements OnChanges {

  @Input() processorModel: TextProcessorFindNumberWithPrefix;
  @Input() processorForm: FormGroup;
  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['processorForm']) {
      this.processorForm.addControl('prefix',  this.fb.control(''));
      this.processorForm.addControl('type',  this.fb.control('', [Validators.required]));
   }
    if (changes['processorModel']) {
      if (this.processorModel != null) {
        this.processorForm.controls['prefix'].setValue(this.processorModel.prefix);
        this.processorForm.controls['type'].setValue(this.processorModel.type);
      }
    }
  }

  submitRemoveMe(): void {
    this.removeMeEvent.emit();
  }


}
