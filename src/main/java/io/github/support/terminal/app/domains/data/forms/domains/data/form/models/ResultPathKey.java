package io.github.support.terminal.app.domains.data.forms.domains.data.form.models;


import lombok.Data;

@Data
public class ResultPathKey{
    private String resultPathPlane;
    private String resultPath;
    public ResultPathKey(String resultPath) {
        this.resultPath = resultPath;
        this.resultPathPlane = resultPath.replace("${","").replace("}","");
    }

    public ResultPathKey(int resultNumber, String paramName) {
        this.resultPathPlane = resultNumber + "." + paramName;
        this.resultPath = "${" +  this.resultPathPlane + "}";
    }
}
