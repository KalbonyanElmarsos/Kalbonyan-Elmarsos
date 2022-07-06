package main.java.com.keysoft.bugtracker.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import main.java.com.keysoft.bugtracker.domain.Application;
import main.java.com.keysoft.bugtracker.repositories.ApplicationRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.springframework.hateoas.core.DummyInvocationUtils.methodOn;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

@BasePathAwareController
public class ApplicationCatalogController {
    private final ApplicationRepository applicationRepository;
    private Logger log = Logger.getLogger(ApplicationCatalogController.class);

    @Autowired
    public ApplicationCatalogController(final ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @RequestMapping(path = "applications", method = RequestMethod.GET, produces = "application/hal+json")
    public @ResponseBody
    ResponseEntity<?> getApplications() {

        List<Application> applications = applicationRepository.findAll();
        log.info("Application count: " + applications.size());

        applications.forEach(app -> getPersonInfo(app));

        Resources<Application> resources = new Resources<Application>(applications);
        resources.add(linkTo(methodOn(ApplicationCatalogController.class).getApplications()).withSelfRel());

        return ResponseEntity.ok(resources);
    }

    @RequestMapping(path = "applications/{id}", method = RequestMethod.GET, produces = "application/hal+json")
    public @ResponseBody
    ResponseEntity<?> getApplication(@PathVariable Integer id) {
        Application application = applicationRepository.findOne(id);
        getPersonInfo(application);

        Resource resource = new Resource(application);
        resource.add(linkTo(methodOn(ApplicationCatalogController.class).getApplication(id)).withSelfRel());

        return ResponseEntity.ok(resource);
    }

    private void getPersonInfo(Application app) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String userManagementService = "http://localhost:8082/persons/" + app.getOwnerId();
            ResponseEntity<String> response = restTemplate.getForEntity(userManagementService, String.class);
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = null;
            root = mapper.readTree(response.getBody());
            JsonNode name = root.path("name");
            JsonNode role = root.path("role");
            app.setOwnerName(name.asText());
            app.setOwnerRole(role.asText());
        } catch (IOException e) {
            app.setOwnerRole("Undefined");
            app.setOwnerName("Undefined");
            e.printStackTrace();
        }

    }

}
