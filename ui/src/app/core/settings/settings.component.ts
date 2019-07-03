import {Component} from '@angular/core';
import {SettingsService} from "./settings.service";


@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  constructor(private settingsService: SettingsService) {

  }

  public update():void {
    this.settingsService.updateApplication().subscribe(res => {
      console.log(res)
    });
  }


}
