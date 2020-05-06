package io.github.bot.terminal.application.domains.db_connection.rest;


import io.github.bot.terminal.application.domains.db_connection.entity.AbstractDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.OracleDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.MySqlDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.OracleDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.PostgresDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
class DbConnectionsRestConverter {

    AbstractDbConnectionDetails mapToDetails(DbConnectionRequest request) {
        if (DbConnectionType.MYSQL.name().equals(request.getType())) {
            return mapToDetails((MySqlDbConnectionRequest) request);
        } else if (DbConnectionType.POSTGRES.name().equals(request.getType())) {
            return mapToDetails((PostgresDbConnectionRequest) request);
        } else if (DbConnectionType.ORACLE.name().equals(request.getType())) {
            return mapToDetails((OracleDbConnectionRequest) request);
        }
        throw new IllegalArgumentException("Unknown notification api type: " + request.getType());
    }

    MySqlDbConnectionDetails mapToDetails(MySqlDbConnectionRequest request) {
        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setName(request.getName());
        details.setType(DbConnectionType.MYSQL);
        details.setHost(request.getHost());
        details.setPort(request.getPort());
        details.setUser(request.getUser());
        details.setPassword(request.getPassword());
        details.setDbName(request.getDbName());
        return details;
    }

    PostgresDbConnectionDetails mapToDetails(PostgresDbConnectionRequest request) {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setName(request.getName());
        details.setType(DbConnectionType.POSTGRES);
        details.setHost(request.getHost());
        details.setPort(request.getPort());
        details.setUser(request.getUser());
        details.setPassword(request.getPassword());
        details.setDbName(request.getDbName());
        return details;
    }

    OracleDbConnectionDetails mapToDetails(OracleDbConnectionRequest request) {
        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setName(request.getName());
        details.setType(DbConnectionType.ORACLE);
        details.setHost(request.getHost());
        details.setPort(request.getPort());
        details.setUser(request.getUser());
        details.setPassword(request.getPassword());
        details.setSid(request.getSid());
        return details;
    }

    DbConnectionDTO mapToDto(AbstractDbConnectionDetails details) {
        if (DbConnectionType.MYSQL.equals(details.getType())) {
            return mapToDto((MySqlDbConnectionDetails) details);
        } else if (DbConnectionType.POSTGRES.equals(details.getType())) {
            return mapToDto((PostgresDbConnectionDetails) details);
        } else if (DbConnectionType.ORACLE.equals(details.getType())) {
            return mapToDto((OracleDbConnectionDetails) details);
        }
        throw new IllegalArgumentException("Unknown db connection type: " + details.getType());
    }

    MySqlDbConnectionDTO mapToDto(MySqlDbConnectionDetails details) {
        MySqlDbConnectionDTO dto = new MySqlDbConnectionDTO();
        dto.setId(details.getId());
        dto.setType(details.getType().name());
        dto.setName(details.getName());
        dto.setHost(details.getHost());
        dto.setPort(details.getPort());
        dto.setUser(details.getUser());
        dto.setPassword(details.getPassword());
        dto.setDbName(details.getDbName());
        return dto;
    }

    PostgresDbConnectionDTO mapToDto(PostgresDbConnectionDetails details) {
        PostgresDbConnectionDTO dto = new PostgresDbConnectionDTO();
        dto.setId(details.getId());
        dto.setType(details.getType().name());
        dto.setName(details.getName());
        dto.setHost(details.getHost());
        dto.setPort(details.getPort());
        dto.setUser(details.getUser());
        dto.setPassword(details.getPassword());
        dto.setDbName(details.getDbName());
        return dto;
    }

    OracleDbConnectionDTO mapToDto(OracleDbConnectionDetails details) {
        OracleDbConnectionDTO dto = new OracleDbConnectionDTO();
        dto.setId(details.getId());
        dto.setType(details.getType().name());
        dto.setName(details.getName());
        dto.setHost(details.getHost());
        dto.setPort(details.getPort());
        dto.setUser(details.getUser());
        dto.setPassword(details.getPassword());
        dto.setSid(details.getSid());
        return dto;
    }

}
