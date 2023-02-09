/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental
 * Date        : 2/9/2023
 * Time        : 12:18 PM
 * Year        : 2023
 */

package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "lk.ijse.spring")
public class WebAppConfig {

    public WebAppConfig() {
        System.out.println("web app config");
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }


}
