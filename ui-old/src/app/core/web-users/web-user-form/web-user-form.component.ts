import {Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import WebUser from '../models/WebUser';

@Component({
  selector: 'web-user-form',
  templateUrl: './web-user-form.component.html',
  styleUrls: ['./web-user-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WebUserFormComponent {

  @Output() onSubmitEvent: EventEmitter<WebUser> = new EventEmitter();
  @Input()  initial: WebUser;
  @Input()  submitButtonText: string;

  private webUser: WebUser = new WebUser();

  constructor() {
  }

  onSubmit(): void {
    this.onSubmitEvent.emit(this.webUser);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initial']) {
      if(this.initial != null && this.initial != undefined){
        this.webUser = this.initial;
      }
    }
  }

}
