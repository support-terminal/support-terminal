package io.github.bot.terminal.application.domains.monitoring.repository

import org.dizitart.no2.objects.ObjectRepository
import org.dizitart.no2.objects.filters.ObjectFilters
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentMap
import java.util.concurrent.locks.Lock
import java.util.concurrent.locks.ReentrantLock

@Service
class MonitoringTaskRepository(
        val db: ObjectRepository<MonitoringTaskDetails>
) {
    private val locks: ConcurrentMap<String, ReentrantLock> = ConcurrentHashMap()

    fun add(details: MonitoringTaskDetails) {
        db.insert(details)
    }

    fun update(details: MonitoringTaskDetails) {
        db.update(details)
    }

    fun findById(id: String): MonitoringTaskDetails? {
        return db.find(ObjectFilters.eq("id", id)).firstOrNull()
    }

    fun findAll(): List<MonitoringTaskDetails> {
        return db.find().toList()
    }

    fun deleteById(id: String) {
        transaction(id) { repository: MonitoringTaskRepository ->
            repository.findById(id)?.let {
                db.remove(ObjectFilters.eq("id", id))
            }
        }
    }

    fun transaction(id: String, action: (MonitoringTaskRepository) -> Unit) {
        val lock = getLock(id)
        lock.lock()
        try {
            action(this)
        } finally {
            lock.unlock()
        }
    }

    private fun getLock(id: String): Lock {
        return locks.computeIfAbsent(id) { k: String -> ReentrantLock() }
    }
}