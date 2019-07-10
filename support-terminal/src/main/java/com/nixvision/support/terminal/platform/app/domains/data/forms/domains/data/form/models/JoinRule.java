package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.models;

import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors.Column;
import lombok.Data;

import static org.apache.logging.log4j.util.Strings.isNotEmpty;

@Data
public class JoinRule{

    private ResultPathKey left;
    private ResultPathKey right;

    public JoinRule(Column column) {
        String joinRule = column.getJoinRule();
        String resultPath = column.getResultPath();
        if(isNotEmpty(joinRule)){
            String[] ti = joinRule.split("-");
            this.left = new ResultPathKey(ti[0]);
            this.right = new ResultPathKey(ti[1]);
        }else{
            this.left = new ResultPathKey(resultPath);
            this.right = new ResultPathKey(resultPath);
        }
    }

}