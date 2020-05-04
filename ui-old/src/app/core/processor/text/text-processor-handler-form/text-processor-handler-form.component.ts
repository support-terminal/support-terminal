import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import TextProcessorHandler from '../models/TextProcessorHandler';
import {TextProcessorsHandlersService} from '../services/text-processors-handlers.service';

@Component({
  selector: 'text-processor-handler-form',
  templateUrl: './text-processor-handler-form.component.html',
  styleUrls: ['./text-processor-handler-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class TextProcessorHandlerFormComponent{

  @Output() onSubmitEvent: EventEmitter<TextProcessorHandler> = new EventEmitter();
  @Input() initial: TextProcessorHandler;
  @Input() submitButtonText: string;


  private textProcessorHandler: TextProcessorHandler = new TextProcessorHandler();
  private textProcessorHandlerForm: FormGroup;

  constructor(private textProcessorsHandlersService: TextProcessorsHandlersService,
              private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.textProcessorHandlerForm = this.fb.group({
      name: ['', Validators.required],
      processors: this.fb.array([]),
    });
  }

  onSubmit(): void {
    this.textProcessorHandler = this.textProcessorHandlerForm.value;
    this.onSubmitEvent.emit(this.textProcessorHandler);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initial']) {
      if (this.initial != null) {
        this.textProcessorHandler = this.initial;
        let id = <FormArray>this.textProcessorHandlerForm.controls['id']
        if (id == null) {
          this.textProcessorHandlerForm.addControl('id', this.fb.control({}));
        }
        this.textProcessorHandlerForm.controls['id'].setValue(this.textProcessorHandler.id);
        this.textProcessorHandlerForm.controls['name'].setValue(this.textProcessorHandler.name);

        if (Array.isArray(this.textProcessorHandler.processors)) {
          this.textProcessorHandler.processors.forEach((processor) => {
            (<FormArray>this.textProcessorHandlerForm.controls['processors'])
              .push(this.fb.group( processor ))
          })
        }

      }
    }
  }

  addProcessor(type: string) {
    (<FormArray>this.textProcessorHandlerForm.controls['processors']).push(this.fb.group({
      type: [type, Validators.required],
    }))
  }

  dropProcessor(index: number) {
    if ((<FormArray>this.textProcessorHandlerForm.controls['processors']).length != 0) {
      (<FormArray>this.textProcessorHandlerForm.controls['processors']).removeAt(index);
    }
  }


  processingTypes = [
    {name: 'Фильтровать строки по ключевому слову', type: 'FILTER_BY_KEY'},
    {name: 'Поиск номеров с префиксом', type: 'FIND_NUMBERS_WITH_PREFIX'},
    {name: 'Добавить разделитель между строк', type: 'ADD_DELIMITER'},
  ];


}
