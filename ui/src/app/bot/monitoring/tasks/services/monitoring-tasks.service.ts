import MonitoringTask from '../models/MonitoringTask';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';
import {Inject} from '@angular/core';
import {MessagingBusService} from '../../../../bus/messaging-bus.service';
import {Config} from '../../../../config';
import Channel from '../../../../bus/Сhannel';
import ActionType from '../../../models/ActionType';
import CronFrequency from '../../../models/CronFrequency';
import ConditionType from '../../../models/ConditionType';


export class MonitoringTasksService {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private url;

  private messagesSubscription: Rx.Subscription;
  public monitoringTasksList = new Rx.BehaviorSubject<MonitoringTask[]>(new Array());


  constructor(@Inject(HttpClient) private http: HttpClient,
              private messagingBusService: MessagingBusService,
              private config: Config) {
    this.url = config.api + '/monitoring/tasks';

    this.getAll();
    this.messagesSubscription = this.messagingBusService.bus().subscribe(message => {
      if (message.channel === Channel.MONITORING_TASKS_WERE_UPDATED) {
        this.getAll();
      }
    });
  }

  add(monitoringTask: MonitoringTask): Rx.Observable<MonitoringTask> {
    return this.http
      .post<MonitoringTask>(this.url, monitoringTask, this.headers);
  }

  getAll() {
    this.http.get<MonitoringTask[]>(this.url, this.headers)
      .subscribe(list => {
        this.monitoringTasksList.next(list);
      });
  }

  get(monitoringTaskId: string): Rx.Observable<MonitoringTask> {
    return this.http
      .get<MonitoringTask>(this.url + `/${monitoringTaskId}`);
  }

  delete(monitoringTaskId: string): Rx.Observable<any> {
    return this.http
      .delete(this.url + `/${monitoringTaskId}`);
  }

  update(monitoringTask: MonitoringTask): Rx.Observable<MonitoringTask> {
    return this.http
      .put<MonitoringTask>(this.url + `/${monitoringTask.id}`, monitoringTask, this.headers);
  }

  getCronFrequencies(): Observable<CronFrequency[]> {
    return this.http.get<CronFrequency[]>(this.url + '/cron-frequencies', this.headers);
  }

  getTypes(): Observable<ActionType[]> {
    return this.http.get<ActionType[]>(this.url + '/types', this.headers);
  }

  getConditionTypes(): Observable<ActionType[]> {
    return this.http.get<ConditionType[]>(this.url + '/conditions', this.headers);
  }

}
