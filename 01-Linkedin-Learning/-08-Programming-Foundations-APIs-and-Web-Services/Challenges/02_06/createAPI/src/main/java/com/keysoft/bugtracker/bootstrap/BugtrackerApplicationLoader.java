package com.keysoft.bugtracker.bootstrap;

import com.keysoft.bugtracker.repositories.TicketRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.keysoft.bugtracker.domain.Ticket;


@Component
public class BugtrackerApplicationLoader implements ApplicationListener<ContextRefreshedEvent> {


    private TicketRepository ticketRepository;


    private Logger log = Logger.getLogger(BugtrackerApplicationLoader.class);

    @Autowired
    public void setTicketRepository(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        Ticket tick1 = new Ticket("Add the ability to sort by release date", "The users need this new feature", 1, 2);
        Ticket tick2 = new Ticket("Updates are not saved correctly to task name", "This is a bug impacting this feature in production", 1, 2);
        Ticket tick3 = new Ticket("Provide a list of applications for users", "The users need this new feature", 2, 1);
        Ticket tick4 = new Ticket("Provide a list of tickets for an application", "The users need this new feature", 2, 1);
        Ticket tick5 = new Ticket("Provide a list of tickets for a given release", "The users need this new feature", 3, 4);
        Ticket tick6 = new Ticket("Give user the ability to add tickets to a release", "The users need this new feature", 4, 5);

        ticketRepository.save(tick1);
        ticketRepository.save(tick2);
        ticketRepository.save(tick3);
        ticketRepository.save(tick4);
        ticketRepository.save(tick5);
        ticketRepository.save(tick6);

        log.info("Saved Ticket id: " + tick1.getId());
        log.info("Saved Ticket id: " + tick2.getId());
        log.info("Saved Ticket id: " + tick3.getId());
        log.info("Saved Ticket id: " + tick4.getId());
        log.info("Saved Ticket id: " + tick5.getId());
        log.info("Saved Ticket id: " + tick6.getId());
    }
}
