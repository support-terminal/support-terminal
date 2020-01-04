import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import TextProcessorFindByKey from "../../models/TextProcessorFindByKey";

@Component({
  selector: 'text-processor-find-by-key',
  templateUrl: './text-processor-find-by-key.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorFindByKeyComponent implements OnChanges {

  @Input() processorModel: TextProcessorFindByKey;
  private initial: TextProcessorFindByKey;
  @Input() processorForm: FormGroup;
  @Output() removeMeEvent: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['processorForm']) {
      this.processorForm.addControl('key',  this.fb.control('', [Validators.required]));
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
