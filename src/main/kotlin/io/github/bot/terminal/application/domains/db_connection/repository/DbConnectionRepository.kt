package io.github.bot.terminal.application.domains.db_connection.repository

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnectionDetails
import org.dizitart.no2.objects.ObjectRepository
import org.dizitart.no2.objects.filters.ObjectFilters
import org.springframework.stereotype.Service
import java.util.*

@Service
class DbConnectionRepository(
        val db: ObjectRepository<DbConnectionDetails>
) {

    fun add(dbConnection: DbConnectionDetails) {
        db.insert(dbConnection)
    }

    fun update(dbConnection: DbConnectionDetails) {
        db.update(dbConnection)
    }

    fun findById(id: String): Optional<DbConnectionDetails> {
        return Optional.ofNullable(db.find(ObjectFilters.eq("id", id)).firstOrDefault())
    }

    fun findAll(): List<DbConnectionDetails> {
        return db.find().toList()
    }

    fun deleteById(id: String) {
        db.remove(ObjectFilters.eq("id", id))
    }
}