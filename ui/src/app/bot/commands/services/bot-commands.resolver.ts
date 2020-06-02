import {BotCommandsService} from './bot-commands.service';
import {Inject} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import BotCommand from '../../models/BotCommand';

export class BotCommandsResolver implements Resolve<BotCommand> {

  constructor(@Inject(BotCommandsService)
              private botCommandsService: BotCommandsService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.paramMap.get('id');
    return new Promise((resolve, reject) => {
      this.botCommandsService.get(id).subscribe(handler => {
        resolve(handler);
      });
    });
  }

}
