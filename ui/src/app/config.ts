import {Injectable} from "@angular/core";

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Config{
  api: string;
  root: string;
  constructor(){
      this.root = '';
      this.api = '/api';
  }
}

