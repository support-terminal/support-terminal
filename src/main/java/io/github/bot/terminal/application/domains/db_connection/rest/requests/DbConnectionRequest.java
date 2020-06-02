package io.github.bot.terminal.application.domains.db_connection.rest.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnectionRequest.class, name = DbConnectionType.Constants.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnectionRequest.class, name = DbConnectionType.Constants.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnectionRequest.class, name = DbConnectionType.Constants.MYSQL)
})
public abstract class DbConnectionRequest {

    public DbConnectionRequest(String type) {
        this.type = type;
    }

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
