package main.java.com.keysoft.bugtracker.bootstrap;

import main.java.com.keysoft.bugtracker.domain.Application;
import main.java.com.keysoft.bugtracker.repositories.ApplicationRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class ApplicationCatalogApplicationLoader implements ApplicationListener<ContextRefreshedEvent> {

    private ApplicationRepository applicationRepository;
    private Logger log = Logger.getLogger(ApplicationCatalogApplicationLoader.class);

    @Autowired
    public void setApplicationRepository(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        Application app1 = new Application("TrackZilla", "Bug tracking app", 1);
        Application app2 = new Application("Order Management", "Bug tracking app", 1);
        Application app3 = new Application("Expense Reporting", "Bug tracking app", 2);
        Application app4 = new Application("Schedule Manager", "Bug tracking app", 1);
        Application app5 = new Application("Time Tracker", "Online timesheet",2);
        applicationRepository.save(app1);
        applicationRepository.save(app2);
        applicationRepository.save(app3);
        applicationRepository.save(app4);
        applicationRepository.save(app5);

    }

}
