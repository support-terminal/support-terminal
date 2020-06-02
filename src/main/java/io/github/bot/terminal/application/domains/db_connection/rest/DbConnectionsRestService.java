package io.github.bot.terminal.application.domains.db_connection.rest;


import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.CheckDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionTypeDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
class DbConnectionsRestService {

    private final DbConnectionsFactory factory;
    private final DbConnectionsRestConverter converter;

    public DbConnectionDTO add(DbConnectionRequest notificationApiRequest) {
        DbConnection dbConnection = factory.createNew(
                converter.mapToDetails(notificationApiRequest)
        );
        return converter.mapToDto(dbConnection.getDetails());
    }

    public DbConnectionDTO edit(String id, DbConnectionRequest request) {
        DbConnection dbConnection
                = factory.merge(id, converter.mapToDetails(request));
        return converter.mapToDto(dbConnection.getDetails());
    }

    public DbConnectionDTO get(String id) {
        DbConnection dbConnection
                = factory.byId(id);
        return converter.mapToDto(dbConnection.getDetails());
    }

    public List<DbConnectionDTO> list() {
        return factory.getAll()
                .stream().map(api -> converter.mapToDto(api.getDetails()))
                .collect(Collectors.toList());
    }

    public void delete(String id) {
        DbConnection dbConnection
                = factory.byId(id);
        dbConnection.delete();
    }

    public List<DbConnectionTypeDTO> types() {
        return Arrays.stream(DbConnectionType.values())
                .map(e -> new DbConnectionTypeDTO().setType(e.name()).setLabel(e.getLabel()))
                .collect(Collectors.toList());
    }


    public CheckDbConnectionDTO check(DbConnectionRequest request) {
        DbConnection dbConnection = factory.build(
                converter.mapToDetails(request)
        );
        try {
            dbConnection.check();
            return new CheckDbConnectionDTO(true);
        } catch (Exception ex) {
            return new CheckDbConnectionDTO(false);
        }
    }


}
