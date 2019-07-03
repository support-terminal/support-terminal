import DataFormResult from "./DataFormResult";
import DataFormStep from "./DataFormStep";
import DataFormParameter from "./DataFormParameter";

export default class DataForm {
    id: string;
    name: string;
    description: string;
    state: string;
    parameters: DataFormParameter[];
    steps: DataFormStep[];
    resultDescriptors: DataFormResult[];
}
