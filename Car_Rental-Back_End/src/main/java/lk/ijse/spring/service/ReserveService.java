package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReserveDTO;

public interface ReserveService {
    String generateReserveId();
    void saveReservationCars(ReserveDTO reserveDTO);
}
