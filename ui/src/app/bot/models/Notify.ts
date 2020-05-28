export default class Notify {
  type: string;
  botId?: string;
  messageTemplate?: string;

  constructor(type: string) {
    this.type = type;
  }
}
