import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Config} from "../../config";
import {Inject} from "@angular/core";


export class SettingsService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  constructor(@Inject(HttpClient) private http: HttpClient,
              private config: Config) {
    this.url = config.api;
  }

  updateApplication(): Observable<any> {
   return this.http
      .post(this.url+'/run-auto-update', {}, this.headers);
  }

}
