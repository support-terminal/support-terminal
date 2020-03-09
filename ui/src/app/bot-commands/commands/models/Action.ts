import Condition from "./Condition";

export default class Action {
  type: string;
  select?: string;
  dataBaseId?: string;
  resultTemplate?: string;
  fileNameTemplate?: string;
  conditions?: Condition[];
}
