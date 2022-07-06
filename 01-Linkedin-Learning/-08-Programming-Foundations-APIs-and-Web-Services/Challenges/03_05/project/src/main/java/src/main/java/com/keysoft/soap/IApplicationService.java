package src.main.java.com.keysoft.soap;

import src.main.java.com.keysoft.model.Application;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.ws.rs.core.Response;

@WebService
public interface IApplicationService {

    @WebMethod
    public String getAll();

}
