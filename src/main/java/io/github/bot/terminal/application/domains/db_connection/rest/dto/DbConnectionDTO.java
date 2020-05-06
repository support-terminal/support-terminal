package io.github.bot.terminal.application.domains.db_connection.rest.dto;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(of={"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnectionDTO.class, name = DbConnectionType.Constants.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnectionDTO.class, name = DbConnectionType.Constants.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnectionDTO.class, name = DbConnectionType.Constants.MYSQL)
})
public abstract class DbConnectionDTO {
    private String id;
    private String name;
    private String type;
    private String host;
    private Integer port;
    private String user;
    private String password;
}
