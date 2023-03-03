/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/23/2023
 * Time        : 7:35 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;

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

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@RequestBody PaymentDTO paymentDTO){
        paymentService.savePayment(paymentDTO);
        return new ResponseUtil(200, "Successfully Saved.",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments(){
        return new ResponseUtil(200, "Ok",paymentService.getAllPayments());
    }
    @GetMapping(path = "/AllIncome/{income}")
    public ResponseUtil totalIncome(@PathVariable("income") String income) {
        return new ResponseUtil(200, "Ok", paymentService.totalIncome());
    }

    @GetMapping("/payments")
    public ResponseUtil calculateIncomeDetails(@RequestParam("startDate") String startDate,
                                               @RequestParam("endDate") String endDate) {
        return new ResponseUtil(200, "Ok", paymentService.getPaymentsBetweenDates(startDate, endDate));
    }

    @GetMapping(path = "/daily")
    public ResponseUtil dailyIncome() {
        return new ResponseUtil(200, "Ok", paymentService.dailyIncome());
    }

    @GetMapping(path = "/weekly")
    public ResponseUtil weeklyIncome() {
        return new ResponseUtil(200, "Ok", paymentService.weeklyIncome());
    }

    @GetMapping(path = "/monthly")
    public ResponseUtil monthlyIncome() {
        return new ResponseUtil(200, "Ok", paymentService.monthlyIncome());
    }

    @GetMapping(path = "/yearly")
    public ResponseUtil yearlyIncome() {
        return new ResponseUtil(200, "Ok", paymentService.yearlyIncome());
    }




}
