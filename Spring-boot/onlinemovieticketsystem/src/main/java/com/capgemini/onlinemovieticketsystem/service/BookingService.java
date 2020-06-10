package com.capgemini.onlinemovieticketsystem.service;

import java.util.List;

import com.capgemini.onlinemovieticketsystem.dto.Booking;

public interface BookingService {
	
	public boolean addTicket(Booking ticket);
	public List<Booking> searchTicket(int userId);
	public boolean deleteBooking(int userId);

}
