/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/17/2023
 * Time        : 7:11 PM
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
public class CarDTO {
    private String carId;
    private String registrationNo;
    private String colour;
    private String brand;
    private String type;
    private String fuelType;
    private String transmissionType;
    private int noOfPassengers;
    private int freeKmForDay;
    private int freeKmForMonth;
    private double pricePerExtraKM;
    private double dailyRatePrice;
    private double monthlyRatePrice;
    private int totalDistanceTraveled;
    private String availableOrNot;
    private String damageOrNot;
    private String underMaintainOrNot;
    private String fontViewImage;
    private String backViewImage;
    private String sideViewImage;
    private String interiorViewImage;
}
