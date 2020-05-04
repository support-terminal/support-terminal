import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import TextProcessorAddDelimiter from '../../models/TextProcessorAddDelimiter';
import TextProcessorFindByKey from '../../models/TextProcessorFindByKey';

@Component({
  selector: 'text-processor-add-delimiter',
  templateUrl: './text-processor-add-delimiter.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorAddDelimiterComponent implements OnChanges {

  @Input() processorModel: TextProcessorAddDelimiter;
  private initial: TextProcessorAddDelimiter;
  @Input() processorForm: FormGroup;
  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();


  constructor(private fb: FormBuilder) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['processorForm']) {
      this.processorForm.addControl('prefix',  this.fb.control(''));
      this.processorForm.addControl('delimiter',  this.fb.control('', [Validators.required]));
      this.processorForm.addControl('suffix',  this.fb.control(''));
      this.processorForm.addControl('type',  this.fb.control('', [Validators.required]));
   }
    if (changes['processorModel']) {
      if (this.processorModel != null) {
        this.processorForm.patchValue(this.processorModel);
      }
    }
  }
  submitRemoveMe(): void {
    this.removeMeEvent.emit();
  }

}
