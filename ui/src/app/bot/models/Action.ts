import Condition from './Condition';
import SqlSelect from './SqlSelect';

export default class Action {
  type: string;
  select?: string;
  queries?: SqlSelect[];
  dbConnectionId?: string;
  resultTemplate?: string;
  fileNameTemplate?: string;
  conditions?: Condition[];
}
