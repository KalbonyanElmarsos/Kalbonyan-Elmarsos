package main.java.com.keysoft.bugtracker.controller;

import main.java.com.keysoft.bugtracker.domain.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationCatalogControllerTests {

    @Autowired
    private TestRestTemplate restTemplate;
    private static final String URL = "http://localhost:8081/applications";

    @Test
    public void testGetApplication() throws Exception {
        //prepare
        //no need to prepare data as data created is by ApplicationCatalogApplicationLoader

        //execute
        ResponseEntity<Application> responseEntity = restTemplate.getForEntity(URL + "/1", Application.class);

        //collect data
        int status = responseEntity.getStatusCodeValue();
        Application application = responseEntity.getBody();

        //verify an OK status is returned
        assertEquals("Correct Response Status", HttpStatus.OK.value(), status);

        //verify Application returned
        assertNotNull(application);

        //verify the application name is TrackZilla
        assertEquals("TrackZilla", application.getName());

        //verify the UserManagementService was called to the add the owner name
        assertEquals("Jane Doe", application.getOwnerName());
    }
}
