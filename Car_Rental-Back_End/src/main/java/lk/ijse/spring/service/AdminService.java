package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;


import java.util.ArrayList;

public interface AdminService {

    void addAdmin(AdminDTO dto);

    void deleteAdmin(String id);

    void updateAdmin(AdminDTO dto);

    ArrayList<AdminDTO> getAllAdmins();

}
