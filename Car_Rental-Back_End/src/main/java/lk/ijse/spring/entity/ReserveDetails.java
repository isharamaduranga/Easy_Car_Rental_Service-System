/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 1:02 AM
 * Year        : 2023
 */

package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity

public class ReserveDetails {

    @Id
    private String reserveId;
    @Id
    private String carId;
    @Id
    private String driverId;

    private String type;
    private String colour;
    private String brand;
    private String driverWantOrNot;
    private String driverName;
    private String driverContact;
    private double loseDamageWaiverPayment;

    @ManyToOne
    @JoinColumn(name = "reserveId",referencedColumnName = "reserveId",updatable = false,insertable = false)
    private Reserve reserve;

    @ManyToOne
    @JoinColumn(name = "carId",referencedColumnName = "carId",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @NotFound(action = NotFoundAction.IGNORE)

    @JoinColumn(name = "driverId",referencedColumnName = "driverId",insertable = false,updatable = false,nullable = true)
    private Driver driver;

}
