/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental
 * Date        : 2/9/2023
 * Time        : 12:17 PM
 * Year        : 2023
 */

package lk.ijse.spring;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}
