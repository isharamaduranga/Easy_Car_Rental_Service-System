/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/23/2023
 * Time        : 7:46 PM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.repo.PaymentRepo;
import lk.ijse.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generatePaymentIds() {
        return paymentRepo.generatePaymentId();
    }

    @Override
    public void savePayment(PaymentDTO paymentDTO) {
        if (!paymentRepo.existsById(paymentDTO.getPaymentId())) {
            paymentRepo.save(mapper.map(paymentDTO, Payment.class));
        } else {
            throw new RuntimeException(paymentDTO.getPaymentId() + " Payment Already Exists..!");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        List<Payment> paymentList = paymentRepo.findAll();
        return mapper.map(paymentList, new TypeToken<List<PaymentDTO>>() {
        }.getType());
    }
}