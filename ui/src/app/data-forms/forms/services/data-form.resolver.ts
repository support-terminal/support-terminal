import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import DataForm from "../models/DataForm";
import {DataFormsService} from "./data-forms.service";


export class DataFormResolver implements Resolve<DataForm> {


  constructor(private dataFormsService: DataFormsService) {

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
