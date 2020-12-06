package io.github.support.terminal.application.domains.bot_commands.repository

import org.dizitart.no2.objects.ObjectRepository
import org.dizitart.no2.objects.filters.ObjectFilters
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentMap
import java.util.concurrent.locks.Lock
import java.util.concurrent.locks.ReentrantLock

@Service
class BotCommandRepository(
        val db: ObjectRepository<BotCommandDetails>
) {
    private val locks: ConcurrentMap<String, ReentrantLock> = ConcurrentHashMap()

    fun add(details: BotCommandDetails) {
        db.insert(details)
    }

    fun update(details: BotCommandDetails) {
        db.update(details)
    }

    fun findById(id: String): BotCommandDetails? {
        return db.find(ObjectFilters.eq("id", id)).firstOrNull()
    }

    fun findAll(): List<BotCommandDetails> {
        return db.find().toList()
    }

    fun deleteById(id: String) {
        transaction(id) { repository: BotCommandRepository ->
            repository.findById(id)?.let {
                db.remove(ObjectFilters.eq("id", id))
            }
        }
    }

    fun transaction(id: String, action: (BotCommandRepository) -> Unit) {
        val lock = getLock(id)
        lock.lock()
        try {
            action(this)
        } finally {
            lock.unlock()
        }
    }

    private fun getLock(id: String): Lock {
        return locks.computeIfAbsent(id) { ReentrantLock() }
    }
}