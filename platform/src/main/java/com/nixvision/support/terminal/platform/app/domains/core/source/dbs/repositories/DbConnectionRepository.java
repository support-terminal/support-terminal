package com.nixvision.support.terminal.platform.app.domains.core.source.dbs.repositories;


import com.nixvision.support.terminal.platform.app.domains.core.source.dbs.entities.DbConnection;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class DbConnectionRepository{


    private final ObjectRepository<DbConnection> dbConnectionRepository;

    public DbConnection add(DbConnection dbConnection) {
        dbConnectionRepository.insert(dbConnection);
        return dbConnectionRepository.find(eq("id", dbConnection.getId())).firstOrDefault();
    }

    public DbConnection update(DbConnection dbConnection) {
        dbConnectionRepository.update(dbConnection);
        return dbConnectionRepository.find(eq("id", dbConnection.getId())).firstOrDefault();
    }


    public DbConnection findById(String id) {
        return dbConnectionRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<DbConnection> findAll() {
        return dbConnectionRepository.find().toList();
    }

    public void deleteById(String id) {
        dbConnectionRepository.remove(eq("id", id));
    }
}
