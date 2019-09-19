package io.github.support.terminal.platform.app.domains.core.source.dbs.entities;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.platform.app.domains.core.source.dbs.values.DbType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;


@Data
@EqualsAndHashCode(of={"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PostgresDbConnection.class, name = DbType.POSTGRES),
        @JsonSubTypes.Type(value = OracleDbConnection.class, name = DbType.ORACLE),
        @JsonSubTypes.Type(value = MySqlDbConnection.class, name = DbType.MYSQL)
})
public abstract class DbConnection{
    @Id
    private String id;
    private String name;
    private String type;
    private String host;
    private Integer port;
    private String user;
    private String password;
    public abstract String getUrl();
    public abstract String getClassName();
    public abstract String getCheckSelect();

}
