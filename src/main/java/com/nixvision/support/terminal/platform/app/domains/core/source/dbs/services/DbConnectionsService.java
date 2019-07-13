package com.nixvision.support.terminal.platform.app.domains.core.source.dbs.services;


import com.nixvision.support.terminal.platform.app.domains.core.source.dbs.entities.DbConnection;
import com.nixvision.support.terminal.platform.app.domains.core.source.dbs.repositories.DbConnectionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DbConnectionsService {

    private final DbConnectionRepository dbConnectionRepository;

    DbConnection add(DbConnection dbConnection) {
        return dbConnectionRepository.add(dbConnection);
    }

    public DbConnection getById(String id) {
        return dbConnectionRepository.findById(id);
    }

    List<DbConnection> getAll() {
        return dbConnectionRepository.findAll();
    }

    DbConnection update(DbConnection dbConnection) {
        return dbConnectionRepository.update(dbConnection);
    }

    void delete(String id) {
        dbConnectionRepository.deleteById(id);
    }


    public Optional<DataSource> getDataSource(String dataBaseId) {
        try{
            DbConnection dbConnection = getById(dataBaseId);
            if(dbConnection == null){
                return Optional.empty();
            }
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName(dbConnection.getClassName());
            dataSource.setUrl(dbConnection.getUrl());
            dataSource.setUsername(dbConnection.getUser());
            dataSource.setPassword(dbConnection.getPassword());
            return Optional.of(dataSource);
        }catch (Exception ex){
            log.warn("Problem with get datasource.", ex);
            return Optional.empty();
        }
    }

    public void check(DbConnection dbConnection) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dbConnection.getClassName());
        dataSource.setUrl(dbConnection.getUrl());
        dataSource.setUsername(dbConnection.getUser());
        dataSource.setPassword(dbConnection.getPassword());
        JdbcTemplate template = new JdbcTemplate(dataSource);
        template.execute(dbConnection.getCheckSelect());
    }
}
