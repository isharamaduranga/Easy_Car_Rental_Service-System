/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental
 * Date        : 2/9/2023
 * Time        : 12:18 PM
 * Year        : 2023
 */

package lk.ijse.spring.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
@EnableTransactionManagement
@PropertySource("classpath:application.properties")
public class JPAConfig {

    @Autowired
    Environment env;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource ds, JpaVendorAdapter jpa) {
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        bean.setPackagesToScan(env.getRequiredProperty("package.name"));
        bean.setDataSource(ds);
        bean.setJpaVendorAdapter(jpa);
        return bean;
    }

    @Bean
    public DataSource dataSource() throws NamingException {
        //we use this data source only for testing purposes (Development)
        //if we are in (Production) we can use a DBCP pool
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setDriverClassName(env.getRequiredProperty("my.app.driverClassName"));
        ds.setUrl(env.getRequiredProperty("my.app.url"));
        ds.setUsername(env.getRequiredProperty("my.app.username"));
        ds.setPassword(env.getRequiredProperty("my.app.password"));
        return ds;
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter va = new HibernateJpaVendorAdapter();
        va.setDatabasePlatform(env.getRequiredProperty("my.app.databasePlatform"));
        va.setDatabase(Database.MYSQL);
        va.setShowSql(true);
        va.setGenerateDdl(true);
        return va;
    }

    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }
}
