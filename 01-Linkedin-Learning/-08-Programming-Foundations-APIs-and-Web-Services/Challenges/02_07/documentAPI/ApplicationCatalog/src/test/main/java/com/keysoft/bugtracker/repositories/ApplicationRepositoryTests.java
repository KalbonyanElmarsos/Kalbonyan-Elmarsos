package main.java.com.keysoft.bugtracker.repositories;

import main.java.com.keysoft.bugtracker.domain.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationRepositoryTests {
    @Autowired
    private TestRestTemplate restTemplate;
    private static final String URL = "http://localhost:8081/applications";

    @Test
    public void testCreateApplication() throws Exception {
        // prepare
        Application application = new Application("New Application", "New tracking app", 2);

        //Execute
        ResponseEntity<Application> responseEntity = restTemplate.postForEntity(URL, application, Application.class);

        //collect data
        int status = responseEntity.getStatusCodeValue();
        Application resultApplication = responseEntity.getBody();

        //verify create status
        assertEquals("Correct Response Status", HttpStatus.CREATED.value(), status);
        assertNotNull(resultApplication);

    }

    @Test
    public void testDeleteApplication() throws Exception {
        //prepare
        //no need to prepare data as data created is by ApplicationCatalogApplicationLoader

        //execute
        ResponseEntity<Void> responseEntity = restTemplate.exchange(URL + "/1", HttpMethod.DELETE,
                null,
                Void.class);

        // collect data
        int status = responseEntity.getStatusCodeValue();

        // verify
        assertEquals(HttpStatus.NO_CONTENT.value(), status);
    }

    @Test
    public void testUpdateApplication() throws Exception {
        //prepare
        // create the application object with id equal to the one to update
        Application application = new Application(1,"New TrackZilla Name", "New app description", 2);

        HttpEntity<Application> requestEntity = new HttpEntity<>(application);

        //execute
        ResponseEntity<Application> responseEntity = restTemplate.exchange(URL +"/" + application.getId(), HttpMethod.PUT,requestEntity, Application.class);

        //collect data
        int status = responseEntity.getStatusCodeValue();
        Application resultApplication = responseEntity.getBody();

        //verify
        assertEquals(HttpStatus.OK.value(), status);

        //verify the application name is TrackZilla
        assertEquals("New TrackZilla Name", resultApplication.getName());
    }

}
