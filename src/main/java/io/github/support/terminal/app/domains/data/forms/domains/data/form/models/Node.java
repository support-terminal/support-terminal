package io.github.support.terminal.app.domains.data.forms.domains.data.form.models;


import lombok.Data;
import lombok.experimental.Accessors;
import org.apache.commons.collections4.MapUtils;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
public class Node{
    ResultPathValue value;
    List<Node> nodes = new ArrayList<>();

    public void addNode(Node node) {
        this.nodes.add(node);
        node.getValue().getJoinValues().putAll(value.getJoinValues());
    }


    public boolean nodeJoinMatch(Node n, JoinRule joinRule){

        if(MapUtils.isEmpty(this.value.getJoinValues())){
            return false;
        }
        ResultPathValue columnRowValue = n.getValue();
        if(MapUtils.isEmpty(columnRowValue.getJoinValues())){
            return false;
        }
        if( this.value.getJoinValues().getOrDefault(joinRule.getLeft(), new Object())
                .equals(columnRowValue.getJoinValues().getOrDefault(joinRule.getRight(), new Object())) ) {
            return true;
        }else{
            return  false;
        }

    }

}
