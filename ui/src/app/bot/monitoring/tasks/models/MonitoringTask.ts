import Action from '../../../models/Action';

export default class MonitoringTask {
  id: string;
  name: string;
  state: string;
  cron: string;
  action: Action;
}

