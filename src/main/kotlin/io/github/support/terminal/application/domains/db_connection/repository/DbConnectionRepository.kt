package io.github.support.terminal.application.domains.db_connection.repository

import org.dizitart.no2.objects.ObjectRepository
import org.dizitart.no2.objects.filters.ObjectFilters
import org.springframework.stereotype.Service

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

    fun findById(id: String): DbConnectionDetails? {
        return db.find(ObjectFilters.eq("id", id)).firstOrNull()
    }

    fun findAll(): List<DbConnectionDetails> {
        return db.find().toList()
    }

    fun deleteById(id: String) {
        db.remove(ObjectFilters.eq("id", id))
    }
}