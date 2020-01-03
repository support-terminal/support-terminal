import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Inject} from "@angular/core";
import {Config} from "../../../../config";
import TextProcessorHandler from "../models/TextProcessorHandler";
import TextProcessorHandlerExecute from "../models/TextProcessorHandlerExecute";
import TextProcessorHandlerExecuteResult from "../models/TextProcessorHandlerExecuteResult";


export class TextProcessorsHandlersService {

  private headers = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  constructor(@Inject(HttpClient) private http: HttpClient,
             private config: Config) {
    this.url = config.api+'/text/process/handlers';
  }

  add(handler:TextProcessorHandler): Observable<TextProcessorHandler> {
   return this.http
      .post<TextProcessorHandler>(this.url, handler, this.headers);
  }

  execute(handler:TextProcessorHandlerExecute): Observable<TextProcessorHandlerExecuteResult> {
   return this.http
      .post<TextProcessorHandlerExecuteResult>(this.url, handler, this.headers);
  }

  getAll(): Observable<TextProcessorHandler[]>{
    return this.http.get<TextProcessorHandler[]>(this.url,this.headers);
  }

  get(id: string): Observable<TextProcessorHandler> {
    return this.http
      .get<TextProcessorHandler>(this.url+`/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http
      .delete(this.url+`/${id}`);
  }

  update(db:TextProcessorHandler): Observable<TextProcessorHandler> {
    return this.http
      .put<TextProcessorHandler>(this.url+`/${db.id}`, db, this.headers);
  }

}
