export default class DataFormParameterValue {
    label: string;
    type: string;

    value: string;

    constructor(label: string, type: string, value: string) {
        this.label = label;
        this.type = type;
        this.value = value;
    }
}
