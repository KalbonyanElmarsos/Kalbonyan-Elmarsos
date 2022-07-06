package main.java.com.keysoft.bugtracker.bootstrap;

import main.java.com.keysoft.bugtracker.domain.Ticket;
import main.java.com.keysoft.bugtracker.repositories.TicketRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;



@Component
public class TicketManagementApplicationLoader implements ApplicationListener<ContextRefreshedEvent> {


    private TicketRepository ticketRepository;
    private Logger log = Logger.getLogger(TicketManagementApplicationLoader.class);

    @Autowired
    public void setTicketRepository(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        Ticket tick1 = new Ticket("App1: Add the ability to sort by release date", "A URGENT: The users need this new feature", 1, 2);
        Ticket tick2 = new Ticket("App2: Updates are not saved correctly to task name", "This is a bug impacting this feature in production", 1, 2);
        Ticket tick3 = new Ticket("App3: Provide a list of applications for users", "The users need this new feature", 2, 1);
        Ticket tick4 = new Ticket("App4: Provide a list of tickets for an application", "The users need this new feature", 2, 1);
        Ticket tick5 = new Ticket("App5: Provide a list of tickets for a given release", "The users need this new feature", 3, 4);
        Ticket tick6 = new Ticket("App6: Give user the ability to add tickets to a release", "The users need this new feature", 4, 5);
        Ticket tick7 = new Ticket("App7: Add the ability to sort by release date", "The users need this new feature", 1, 6);
        Ticket tick8 = new Ticket("App8: Updates are not saved correctly to task name", "B URGENT: This is a bug impacting this feature in production", 1, 5);
        Ticket tick9 = new Ticket("App9: Provide a list of applications for users", "The users need this new feature", 2, 8);
        Ticket tick10 = new Ticket("App10: Provide a list of tickets for an application", "The users need this new feature", 2, 2);
        Ticket tick11 = new Ticket("App11: Provide a list of tickets for a given release", "The users need this new feature", 3, 10);
        Ticket tick12 = new Ticket("App12: Give user the ability to add tickets to a release", "The users need this new feature", 4, 11);
        Ticket tick13 = new Ticket("App13: Add the ability to sort by release date", "The users need this new feature", 1, 13);
        Ticket tick14 = new Ticket("App14: Updates are not saved correctly to task name", "C URGENT: This is a bug impacting this feature in production", 1, 1);
        Ticket tick15 = new Ticket("App15: Provide a list of applications for users", "The users need this new feature", 2, 1);
        Ticket tick16 = new Ticket("App16: Provide a list of tickets for an application", "The users need this new feature", 2, 5);
        Ticket tick17 = new Ticket("App17: Provide a list of tickets for a given release", "The users need this new feature", 3, 4);
        Ticket tick18 = new Ticket("App18: Give user the ability to add tickets to a release", "The users need this new feature", 4, 3);
        Ticket tick19 = new Ticket("App19: Add the ability to sort by release date", "The users need this new feature", 1, 8);
        Ticket tick20 = new Ticket("App20: Updates are not saved correctly to task name", "This is a bug impacting this feature in production", 1, 2);
        Ticket tick21 = new Ticket("App21: Provide a list of applications for users", "The users need this new feature", 2, 1);
        Ticket tick22 = new Ticket("App22: Provide a list of tickets for an application", "The users need this new feature", 2, 3);
        Ticket tick23 = new Ticket("App23: Provide a list of tickets for a given release", "The users need this new feature", 3, 4);
        Ticket tick24 = new Ticket("App24: Give user the ability to add tickets to a release", "The users need this new feature", 4, 5);
        Ticket tick25 = new Ticket("App25: Add the ability to sort by release date", "D URGENT: The users need this new feature", 1, 2);
        Ticket tick26 = new Ticket("App26: Updates are not saved correctly to task name", "This is a bug impacting this feature in production", 1, 2);
        Ticket tick27 = new Ticket("App27: Provide a list of applications for users", "The users need this new feature", 2, 1);
        Ticket tick28 = new Ticket("App28: Provide a list of tickets for an application", "The users need this new feature", 2, 5);
        Ticket tick29 = new Ticket("App29: Provide a list of tickets for a given release", "The users need this new feature", 3, 3);
        Ticket tick30 = new Ticket("App30: Give user the ability to add tickets to a release", "E URGENT: The users need this new feature", 4, 5);

        ticketRepository.save(tick1);
        ticketRepository.save(tick2);
        ticketRepository.save(tick3);
        ticketRepository.save(tick4);
        ticketRepository.save(tick5);
        ticketRepository.save(tick6);
        ticketRepository.save(tick7);
        ticketRepository.save(tick8);
        ticketRepository.save(tick9);
        ticketRepository.save(tick10);
        ticketRepository.save(tick11);
        ticketRepository.save(tick12);
        ticketRepository.save(tick13);
        ticketRepository.save(tick14);
        ticketRepository.save(tick15);
        ticketRepository.save(tick16);
        ticketRepository.save(tick17);
        ticketRepository.save(tick18);
        ticketRepository.save(tick19);
        ticketRepository.save(tick20);
        ticketRepository.save(tick21);
        ticketRepository.save(tick22);
        ticketRepository.save(tick23);
        ticketRepository.save(tick24);
        ticketRepository.save(tick25);
        ticketRepository.save(tick26);
        ticketRepository.save(tick27);
        ticketRepository.save(tick28);
        ticketRepository.save(tick29);
        ticketRepository.save(tick30);
    }
}
