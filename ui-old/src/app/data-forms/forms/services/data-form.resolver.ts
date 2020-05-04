import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import DataForm from '../models/DataForm';
import {DataFormsService} from './data-forms.service';
import {Inject} from '@angular/core';


export class DataFormResolver implements Resolve<DataForm> {


  constructor(@Inject(DataFormsService) private dataFormsService: DataFormsService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
      let formId = route.paramMap.get('formId');
      return new Promise((resolve, reject) => {
          this.dataFormsService.get(formId).subscribe(dataForm => {
              resolve(dataForm);
          });
      });
  }

}
