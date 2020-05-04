import {Injectable} from '@angular/core';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Config{
  api: string;
  root: string;
  constructor(){
    if (environment.production) {
      this.root = '';
      this.api = '/api';
    }else{
      this.root = 'http://localhost:9876';
      this.api = 'http://localhost:9876/api';
    }
  }
}

