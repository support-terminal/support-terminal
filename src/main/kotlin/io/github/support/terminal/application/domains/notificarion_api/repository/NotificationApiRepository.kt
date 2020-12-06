package io.github.support.terminal.application.domains.notificarion_api.repository

import org.dizitart.no2.objects.ObjectRepository
import org.dizitart.no2.objects.filters.ObjectFilters
import org.springframework.stereotype.Service

@Service
class NotificationApiRepository(
        val db: ObjectRepository<NotificationApiDetails>
) {

    fun add(details: NotificationApiDetails) {
        db.insert(details)
    }

    fun findById(id: String?): NotificationApiDetails? {
        return db.find(ObjectFilters.eq("id", id)).firstOrDefault()
    }

    fun findAll(): List<NotificationApiDetails> {
        return db.find().toList()
    }

    fun deleteById(id: String?) {
        db.remove(ObjectFilters.eq("id", id))
    }

    fun update(details: NotificationApiDetails) {
        db.update(details)
    }
}