	package application.user;



import application.auth.roles.RoleRepository;
import application.auth.user.User;
import application.auth.user.UserController;
import application.auth.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import common.BaseControllerTest;
import org.eclipse.jetty.webapp.WebAppContext;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
/**
 * Created by gipai on 9/29/2017.
 */

@RunWith(MockitoJUnitRunner.class)
@WebMvcTest(UserController.class)
@ContextConfiguration(classes = {TestContext.class, WebAppContext.class})
public class UserControllerTest extends BaseControllerTest {


    private MockMvc mvc;

    @Mock
    private  UserRepository userRepositoryMock;

    @Mock
    private  RoleRepository roleRepositoryMock;


    @Before
    public void setUp() {
        mvc = MockMvcBuilders.standaloneSetup(new UserController(userRepositoryMock, roleRepositoryMock))
                .setHandlerExceptionResolvers(exceptionResolver())
                .setValidator(validator())
                .setViewResolvers(viewResolver())
                .build();
    }

    @Test
    public void addUserWithNoNameThenReturnError()
            throws Exception {

        User user = new User();
        final ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(user);
        mvc.perform(post("/user")
                .content(json)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());


    }


    @Test
    public void addUserWithValidNameThenReturnSuccess()
            throws Exception {

        List<String> roleIds = new ArrayList<String>();
        roleIds.add("1");
        roleIds.add("2");
        User user = new User("ss", "ss", "ss", "ss", "testUser@email.com","password",roleIds);

        Mockito.when(userRepositoryMock.save(Mockito.isA(User.class))).thenReturn(user);



//        final ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(user);
//        mvc.perform(post("/user")
//                .content(j
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk());


    }
}
