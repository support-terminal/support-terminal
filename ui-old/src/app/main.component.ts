import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent implements AfterViewChecked {

  @ViewChild('autoScrollMe') private autoScrollContainer: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.autoScrollContainer.nativeElement.scrollTop = this.autoScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

}
