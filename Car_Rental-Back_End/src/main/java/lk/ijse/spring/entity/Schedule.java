/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 1:11 AM
 * Year        : 2023
 */

package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Schedule {

    @Id
    private String scheduleId;

    private String pickUpDate;
    private String pickUpTime;
    private String returnDate;
    private String returnTime;
    private String pickUpVenue;
    private String returnVenue;
    private String releaseOrNot;

    @OneToOne(cascade = CascadeType.ALL)
    private ReserveDetails reserveDetails;
}
