import Action from "./Action";
import Cron from "./Cron";
import Notify from "./Notify";
import Condition from "./Condition";

export default class BotMonitoringTask {
    id: string;
    name: string;
    state: string;
    action: Action;
    cron: Cron;
    conditions: Condition[];
    notifyList: Notify[];


    constructor() {
        this.action = new Action();
        this.cron = new Cron();
        this.conditions = new Array();
        this.notifyList = new Array();
    }
}
