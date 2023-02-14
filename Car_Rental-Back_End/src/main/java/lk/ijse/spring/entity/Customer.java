/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/14/2023
 * Time        : 2:23 PM
 * Year        : 2023
 */

package lk.ijse.spring.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Customer {
    @Id
    private String customerId;
    private LocalDate registeredDate;
    private String customerName;
    private String customerAddress;
    private String customerContact;
    private String customerEmail;
    private String customerNicNo;
    private String customerDrivingLicenseNo;
    private String NICImage;
    private String DrivingLicenseImage;
}
