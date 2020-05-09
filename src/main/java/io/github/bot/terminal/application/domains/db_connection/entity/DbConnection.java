package io.github.bot.terminal.application.domains.db_connection.entity;

import io.github.bot.terminal.application.domains.common.Persistable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.Optional;

public abstract class DbConnection<D extends DbConnectionDetails> implements Persistable {

    public abstract D getDetails();

    public abstract String getUrl();

    public abstract String getClassName();

    public abstract String getCheckSelect();

    public void check() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(getClassName());
        dataSource.setUrl(getUrl());
        dataSource.setUsername(getDetails().getUser());
        dataSource.setPassword(getDetails().getPassword());
        JdbcTemplate template = new JdbcTemplate(dataSource);
        template.execute(getCheckSelect());
    }

    public Optional<DataSource> getDataSource(String dbConnectionId) {
        try {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName(getClassName());
            dataSource.setUrl(getUrl());
            dataSource.setUsername(getDetails().getUser());
            dataSource.setPassword(getDetails().getPassword());
            return Optional.of(dataSource);
        } catch (Exception ex) {
            return Optional.empty();
        }
    }
}
