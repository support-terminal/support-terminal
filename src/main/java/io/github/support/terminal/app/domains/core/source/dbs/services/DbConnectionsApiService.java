package io.github.support.terminal.app.domains.core.source.dbs.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.application.domains.core.events.services.ApplicationEventsService;
import io.github.support.terminal.app.domains.core.source.dbs.entities.DbConnection;
import io.github.support.terminal.app.domains.core.source.dbs.models.CheckDbConnectionDTO;
import io.github.support.terminal.app.domains.core.source.dbs.models.DbConnectionDTO;
import io.github.support.terminal.app.domains.core.source.dbs.models.DbTypeDTO;
import io.github.support.terminal.app.domains.core.source.dbs.requests.DbConnectionRequest;
import io.github.support.terminal.app.domains.core.source.dbs.values.DbType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Public service of DB connections
 */
@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DbConnectionsApiService {

    private final ObjectMapper objectMapper;
    private final DbConnectionsService dbConnectionsService;
    private final ApplicationEventsService applicationEventsService;
    private Collection<DbConnectionDTO> connectionTypes;

    /**
     * Add new db connection to repository
     *
     * @param dbConnectionRequest
     * @return
     */
    public DbConnectionDTO add(DbConnectionRequest dbConnectionRequest) {
        DbConnection connection = objectMapper.convertValue(dbConnectionRequest, DbConnection.class);
        connection.setId(UUID.randomUUID().toString());
        return objectMapper.convertValue(dbConnectionsService.add(connection), DbConnectionDTO.class);
    }

    /**
     * Get all valid db connections
     *
     * @return
     */
    public Collection<DbConnectionDTO> getList() {
        return dbConnectionsService.getAll()
                .stream().map(c -> objectMapper.convertValue(c, DbConnectionDTO.class))
                .collect(Collectors.toList());
    }

    /**
     * Get by Id
     *
     * @param id
     * @return
     */
    public DbConnectionDTO getById(String id) {
        return objectMapper.convertValue(dbConnectionsService.getById(id), DbConnectionDTO.class);
    }

    public DbConnectionDTO update(String id, DbConnectionRequest request) throws Exception {
        if (dbConnectionsService.getById(id) == null) {
            throw new Exception("DbConnection not found");
        }
        DbConnection dbConnection = objectMapper.convertValue(request, DbConnection.class);
        dbConnection.setId(id);
        return objectMapper.convertValue(dbConnectionsService.update(dbConnection), DbConnectionDTO.class);
    }


    public void delete(String id) {
        dbConnectionsService.delete(id);
    }

    public Collection<DbTypeDTO> getConnectionTypes() {
        Collection types = new ArrayList();
        types.add(new DbTypeDTO().setName("PostgresSql").setType(DbType.POSTGRES));
        types.add(new DbTypeDTO().setName("Oracle").setType(DbType.ORACLE));
        types.add(new DbTypeDTO().setName("MySQL").setType(DbType.MYSQL));
        return types;
    }

    public CheckDbConnectionDTO check(DbConnectionRequest request) {
        DbConnection dbConnection = objectMapper.convertValue(request, DbConnection.class);
        try {
           dbConnectionsService.check(dbConnection);
           return new CheckDbConnectionDTO(true);
        } catch (Exception ex) {
           log.error("Could not reach the database: ", ex.getMessage(), ex);
           applicationEventsService.notifyUi("Could not reach the database: "+ex.getMessage());
           return new CheckDbConnectionDTO(false);
        }
    }
}
