package com.grupo9.digitalbooking.services;

import com.grupo9.digitalbooking.model.Reservation;

import java.util.List;
import java.util.Optional;

public interface ReservationService {


    List<Reservation> findByUser_id(Integer userId);
    List<Reservation> findByProduct_id(Integer productId);
    List<Reservation> getAllReservation();
    Optional<Reservation> getReservationById(Integer id);


    Reservation saveReservation(Reservation reservation);

    Reservation updateReservation(Reservation reservation);
    void deleteReservationById(Integer reservation);

}
