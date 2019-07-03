import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {Config} from "./config";


@Component({
  selector: 'main-menu',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
  providers:[Config]
})
export class MainComponent implements AfterViewChecked{

  @ViewChild('autoScrollMe') private autoScrollContainer: ElementRef;

  constructor(private config : Config){
    console.info(config)
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.autoScrollContainer.nativeElement.scrollTop = this.autoScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

}
