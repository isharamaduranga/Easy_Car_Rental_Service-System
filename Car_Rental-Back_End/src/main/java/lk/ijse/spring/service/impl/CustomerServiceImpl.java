/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/14/2023
 * Time        : 3:03 PM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveCustomer(CustomerDTO customer) {
        if (!repo.existsById(customer.getCustomerId())) {
            repo.save(mapper.map(customer, Customer.class));
        }else {
            throw new RuntimeException(customer.getCustomerId() + " Customer Already Exists !!!");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {
        if (repo.existsById(customer.getCustomerId())){
            repo.save(mapper.map(customer, Customer.class));
        }else {
            throw new RuntimeException(customer.getCustomerId() + " " + "No Such Customer..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException(id + " " + "No Such Customer..! Please Check The Correct Id..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (repo.existsById(id)){
            Customer customer = repo.findById(id).get();
            return mapper.map(customer, CustomerDTO.class);
        }else {
            throw new RuntimeException(id + " " + "No Such Customer..! Please Check The Id..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<CustomerDTO>>(){
        }.getType());
    }

    @Override
    public String generateCustomerIds() {
        return repo.generateCustomerId();
    }

    @Override
    public int countRegisteredCustomers() {
        return repo.countRegisteredCustomers();
    }

    @Override
    public int countDailyRegisteredCustomers(String date) {
        return repo.countDailyRegisteredCustomers(date);
    }

    @Override
    public CustomerDTO searchUserFromCustomer(String id) {
        Customer customer = repo.searchUserFromCustomer(id);
        return mapper.map(customer,CustomerDTO.class);
    }

    @Override
    public CustomerDTO findCustomerToReserve(String nic) {
        Customer customer = repo.findCustomerToReserve(nic);
        return mapper.map(customer,CustomerDTO.class);
    }
}
