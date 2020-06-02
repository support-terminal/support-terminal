package io.github.bot.terminal.application.domains.db_connection.entity;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;


@Data
@EqualsAndHashCode(of = {"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnectionDetails.class, name = DbConnectionType.Constants.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnectionDetails.class, name = DbConnectionType.Constants.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnectionDetails.class, name = DbConnectionType.Constants.MYSQL)
})
public abstract class DbConnectionDetails {
    @Id
    protected String id;
    protected String name;
    protected DbConnectionType type;
    protected String host;
    protected Integer port;
    protected String user;
    protected String password;
}
