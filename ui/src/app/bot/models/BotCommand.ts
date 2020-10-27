import Action from './Action';

export default class BotCommand {
    id: string;
    name: string;
    cmdTemplate: string;
    botIds: string;
    enabled: boolean;
    action: Action;

    constructor() {
        this.action = new Action();
    }
}
