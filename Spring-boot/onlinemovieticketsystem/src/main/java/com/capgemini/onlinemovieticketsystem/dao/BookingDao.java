package com.capgemini.onlinemovieticketsystem.dao;

import java.util.List;

import com.capgemini.onlinemovieticketsystem.dto.Booking;

public interface BookingDao {
	
	public boolean addTicket(Booking ticket);
	public List<Booking> searchTicket(int userId);
	public boolean deleteBooking(int userId);
}
