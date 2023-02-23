/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/23/2023
 * Time        : 7:32 PM
 * Year        : 2023
 */

package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {

    private String paymentId;
    private String paymentDate;
    private double rentFee;
    private String harmOrNot;
    private double loseDamagePayment;
    private double reduceLoseDamagePayment;
    private double driverFee;
    private double travelledDistance;
    private double extraKm;
    private double extraKmPrice;
    private double fullPayment;

    private ReserveDetailsDTO reserveDetails;

}
