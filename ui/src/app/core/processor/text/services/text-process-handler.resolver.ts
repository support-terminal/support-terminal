import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Inject} from "@angular/core";
import {TextProcessorsHandlersService} from "./text-processors-handlers.service";
import TextProcessorHandler from "../models/TextProcessorHandler";


export class TextProcessHandlerResolver implements Resolve<TextProcessorHandler> {


  constructor(@Inject(TextProcessorsHandlersService)
              private textProcessorsHandlersService: TextProcessorsHandlersService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
      let id = route.paramMap.get('id');
      return new Promise((resolve, reject) => {
          this.textProcessorsHandlersService.get(id).subscribe(handler => {
              resolve(handler);
          });
      });
  }

}
