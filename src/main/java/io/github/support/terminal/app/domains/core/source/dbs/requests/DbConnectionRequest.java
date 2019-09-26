package io.github.support.terminal.app.domains.core.source.dbs.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.app.domains.core.source.dbs.values.DbType;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnectionRequest.class, name = DbType.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnectionRequest.class, name = DbType.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnectionRequest.class, name = DbType.MYSQL)
})
public abstract class DbConnectionRequest {
    @NotBlank
    private String name;
    @NotBlank
    private String type;
    @NotBlank
    private String host;
    @NotNull
    private Integer port;
    @NotBlank
    private String user;
    @NotBlank
    private String password;
}
