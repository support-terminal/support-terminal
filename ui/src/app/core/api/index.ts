import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagingBusService} from "./messaging-bus.service";

export * from './messaging-bus.service';
export {Message} from './Message';


@NgModule({
  imports: [
    CommonModule
  ]
})
export class UiCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiCoreModule,
      providers: [MessagingBusService]
    };
  }
}
