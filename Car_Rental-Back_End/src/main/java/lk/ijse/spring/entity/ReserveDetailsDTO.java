/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 12:49 AM
 * Year        : 2023
 */

package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReserveDetailsDTO {

    private String reserveId;
    private String carId;
    private String type;
    private String colour;
    private String brand;
    private String driverWantOrNot;
    private String driverId;
    private String driverName;
    private String driverContact;
    private double loseDamageWaiverPayment;
}
