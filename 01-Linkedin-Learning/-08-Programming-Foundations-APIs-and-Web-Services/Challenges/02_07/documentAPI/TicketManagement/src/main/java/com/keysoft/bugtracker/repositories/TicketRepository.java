package main.java.com.keysoft.bugtracker.repositories;

import main.java.com.keysoft.bugtracker.domain.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    @RestResource(path = "descriptionIgnoreCaseContaining", rel = "descriptionIgnoreCaseContaining")
    public Page findByDescriptionIgnoreCaseContaining(@Param("description") String description, Pageable p);

    @RestResource(path = "findByApplicationId", rel = "findByApplicationId")
    public Page findByApplicationId(@Param("appId") Integer appId, Pageable p);

    @RestResource(path = "titleIgnoreCaseContaining", rel = "titleIgnoreCaseContaining")
    public Page findByTitleIgnoreCaseContaining(@Param("title") String title, Pageable p);

}
