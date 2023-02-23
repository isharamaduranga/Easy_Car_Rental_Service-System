/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/23/2023
 * Time        : 7:35 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @GetMapping(params = {"test"})
    public ResponseUtil generatePaymentIds(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", paymentService.generatePaymentIds());
    }

}
