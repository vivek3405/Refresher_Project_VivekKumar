package com.capgemini.onlinemovieticketsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.onlinemovieticketsystem.dao.BookingDao;
import com.capgemini.onlinemovieticketsystem.dto.Booking;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingDao dao;

	@Override
	public boolean addTicket(Booking ticket) {
		return dao.addTicket(ticket);
	}

	@Override
	public List<Booking> searchTicket(int userId) {
		return dao.searchTicket(userId);
	}

	@Override
	public boolean deleteBooking(int userId) {
		return dao.deleteBooking(userId);
	}

	
}
