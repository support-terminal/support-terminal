import DataForm from "../models/DataForm";

import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from "rxjs";
import {Observable} from "rxjs";


import DbConnection from "../models/DbConnection";
import Channel from "../../bus/Сhannel";
import DataFormExecuteRequest from "../models/DataFormExecuteRequest";
import DataForExecution from "../models/DataForExecution";
import {MessagingBusService} from "../../../core/api";
import {Config} from "../../../config";


export class DataFormsService {

    private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    private url;
    private dataBasesUrl;

    public dataBasesSubject: Rx.BehaviorSubject<DbConnection[]> = new Rx.BehaviorSubject<DbConnection[]>(new Array());

    private subscription: Rx.Subscription;

    constructor(private http: HttpClient,
                private messagingBusService: MessagingBusService,
                private config: Config) {
        this.url = config.api + '/data-forms/forms';
        this.dataBasesUrl = config.api + '/db-connections';

        this.requestDataBases();

        this.subscription = this.messagingBusService.getMessage().subscribe(message => {
            if (message.channel == Channel.DB_CONNECTIONS_WERE_UPDATED) {
                this.requestDataBases();
            }
        });
    }

    requestDataBases() {
        this.http.get<DbConnection[]>(this.dataBasesUrl, this.headers)
            .subscribe(dbs => {
                this.dataBasesSubject.next(dbs);
            });
    }

    add(dataForm: DataForm): Observable<DataForm> {
        return this.http
            .post<DataForm>(this.url, dataForm, this.headers);
    }

    execute(formId:string, request: DataFormExecuteRequest): Observable<DataForExecution> {
        return this.http
            .post<DataForExecution>(`${this.url}/${formId}/executions`, request, this.headers);
    }


    getExecutionById(executionId: string): Observable<DataForExecution> {
        return this.http
            .get<DataForExecution>(this.url + `/executions/${executionId}`);
    }

    getAll(): Observable<DataForm[]> {
        return this.http.get<DataForm[]>(this.url, this.headers);
    }

    get(datFormId: string): Observable<DataForm> {
        return this.http
            .get<DataForm>(this.url + `/${datFormId}`);
    }

    delete(datFormId: string): Observable<any> {
        return this.http
            .delete(this.url + `/${datFormId}`);
    }

    update(dataForm: DataForm): Observable<DataForm> {
        return this.http
            .put<DataForm>(this.url + `/${dataForm.id}`, dataForm, this.headers);
    }


}
