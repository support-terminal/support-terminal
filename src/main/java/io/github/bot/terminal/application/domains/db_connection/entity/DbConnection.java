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
        JdbcTemplate template = createJdbcTemplate();
        template.execute(getCheckSelect());
    }

     JdbcTemplate createJdbcTemplate() {
        return new JdbcTemplate(getDataSource().get());
    }

    public Optional<DataSource> getDataSource() {
        try {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setUrl(getUrl());
            dataSource.setUsername(getDetails().getUser());
            dataSource.setPassword(getDetails().getPassword());
            dataSource.setDriverClassName(getClassName());
            return Optional.of(dataSource);
        } catch (Exception ex) {
            //TODO log out -- !!!When class name not found - it means that we forget jar driver or we dont see it
            return Optional.empty();
        }
    }
}
