package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReserveDTO;

import java.util.List;

public interface ReserveService {
    String generateReserveId();
    void saveReservationCars(ReserveDTO reserveDTO);
    List<ReserveDTO>getAllReservations();
    ReserveDTO searchReservation(String rId);

}
