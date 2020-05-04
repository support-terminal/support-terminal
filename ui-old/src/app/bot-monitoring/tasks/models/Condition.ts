export default class Condition{
  type: string;
  expectedValue?: string;
  constructor(type: string) {
     this.type = type;
  }
}
