package src.main.java.com.keysoft.soap;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.ws.rs.core.Response;

@WebService(
        endpointInterface = "src.main.java.com.keysoft.soap.IApplicationService",
        serviceName = "ApplicationServiceSOAP")
public class ApplicationService implements IApplicationService {

    public ApplicationService() {
    }

    @Override
    public String getAll() {
            return "Hello World";
    }
}
