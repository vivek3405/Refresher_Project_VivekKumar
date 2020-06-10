package com.capgemini.onlinemovieticketsystem.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.capgemini.onlinemovieticketsystem.dto.Booking;
import com.capgemini.onlinemovieticketsystem.exception.BookingException;
import com.capgemini.onlinemovieticketsystem.exception.UserException;

@Repository
public class BookingDaoImpl implements BookingDao {
	
	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public boolean addTicket(Booking ticket) {
		EntityManager manager= factory.createEntityManager();
		EntityTransaction transaction=manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(ticket);
			transaction.commit();
			manager.close();
			return true;
		} catch (Exception e) {
			manager.close();
			throw new BookingException("ticket not generated");
		}
	}

	@Override
	public List<Booking> searchTicket(int userId) {
		List<Booking> list = new ArrayList<Booking>();
		EntityManager manager = factory.createEntityManager();
		String jpql = "from Booking where userId=:userId";
		TypedQuery<Booking> query = manager.createQuery(jpql, Booking.class);
		query.setParameter("userId", userId);
	    query.getResultList();
	    list = query.getResultList();
	    manager.close();
	    return list;
	}

	@Override
	public boolean deleteBooking(int userId) {
		EntityManager manager=factory.createEntityManager();
		EntityTransaction transaction=manager.getTransaction();
		transaction.begin();
		Booking booking=manager.find(Booking.class, userId);
		if(booking!=null) {
			manager.remove(booking);
			transaction.commit();
			manager.close();
			return true;
		}
		manager.close();
		throw new UserException("ticket not found");
	}

}
