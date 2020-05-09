import Condition from './Condition';

export default class Action {
  type: string;
  select?: string;
  dbConnectionId?: string;
  resultTemplate?: string;
  fileNameTemplate?: string;
  conditions?: Condition[];
}
