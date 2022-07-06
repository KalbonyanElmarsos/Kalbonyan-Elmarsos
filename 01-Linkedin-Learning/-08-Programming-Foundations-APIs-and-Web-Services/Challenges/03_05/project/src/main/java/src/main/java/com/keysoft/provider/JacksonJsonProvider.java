package src.main.java.com.keysoft.provider;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

/**
 * Jackson JSON processor
 */

@Provider
public class JacksonJsonProvider implements ContextResolver<ObjectMapper> {
    private static final ObjectMapper MAPPER = new ObjectMapper();

    static {
        MAPPER.setSerializationInclusion(JsonInclude.Include.NON_EMPTY);
        MAPPER.disable(MapperFeature.USE_GETTERS_AS_SETTERS);
    }

    public JacksonJsonProvider() {
        System.out.println("Instantiate JacksonJsonProvider");
    }

    public ObjectMapper getContext(Class<?> type) {
        System.out.println("JacksonJsonProvider.getContext() called with type: "+type);
        return MAPPER;
    }

}
