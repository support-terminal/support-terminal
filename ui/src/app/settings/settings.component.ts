import {Component} from '@angular/core';
import {SettingsService} from './settings.service';


@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  private version: string;

  constructor(private settingsService: SettingsService) {
    settingsService.info().subscribe(res => {
      this.version = res.build.version;
    });
  }

  public update(): void {
    this.settingsService.updateApplication().subscribe(res => {
      console.log(res)
    });
  }


}
