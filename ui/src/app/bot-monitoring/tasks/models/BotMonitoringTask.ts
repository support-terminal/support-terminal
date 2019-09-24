import Action from "./Action";
import CronFrequency from "./Cron";
import Notify from "./Notify";
import Condition from "./Condition";

export default class BotMonitoringTask {
  id: string;
  name: string;
  state: string;
  action: Action;
  cronFrequency: CronFrequency;
  conditions: Condition[];
  notifyList: Notify[];
}

