package io.github.support.terminal.application.domains.bot_monitoring.task.repositories;



import io.github.support.terminal.application.domains.bot_monitoring.task.models.BotMonitoringTask;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.elemMatch;
import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class BotMonitoringTaskRepository {

    private final ObjectRepository<BotMonitoringTask> botMonitoringTaskRepository;

    public BotMonitoringTask add(BotMonitoringTask check) {
        botMonitoringTaskRepository.insert(check);
        return botMonitoringTaskRepository.find(eq("id", check.getId())).firstOrDefault();
    }

    public BotMonitoringTask update(BotMonitoringTask check) {
        botMonitoringTaskRepository.update(check);
        return botMonitoringTaskRepository.find(eq("id", check.getId())).firstOrDefault();
    }


    public BotMonitoringTask findById(String id) {
        return botMonitoringTaskRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<BotMonitoringTask> findAll() {
        return botMonitoringTaskRepository.find().toList();
    }

    public void deleteById(String id) {
        botMonitoringTaskRepository.remove(eq("id", id));
    }
    
    public Collection<BotMonitoringTask> getAllByBotId(String botId){
        return botMonitoringTaskRepository.find(elemMatch("botIds", eq("$", botId))).toList();
    }

}
