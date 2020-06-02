import Action from '../../../models/Action';
import Condition from '../../../models/Condition';
import Notify from '../../../models/Notify';

export default class MonitoringTask {
  id: string;
  name: string;
  enabled: boolean;
  cron: string;
  action: Action;
  conditions: Condition[];
  notifyList: Notify[];
}

