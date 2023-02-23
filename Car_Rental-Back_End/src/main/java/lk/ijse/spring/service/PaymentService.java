package lk.ijse.spring.service;

import lk.ijse.spring.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    String generatePaymentIds();

    void savePayment(PaymentDTO paymentDTO);

    List<PaymentDTO> getAllPayments();


}
