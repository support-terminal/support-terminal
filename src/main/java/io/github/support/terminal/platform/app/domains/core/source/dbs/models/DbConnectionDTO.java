package io.github.support.terminal.platform.app.domains.core.source.dbs.models;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.platform.app.domains.core.source.dbs.values.DbType;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(of={"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnectionDTO.class, name = DbType.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnectionDTO.class, name = DbType.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnectionDTO.class, name = DbType.MYSQL)
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
