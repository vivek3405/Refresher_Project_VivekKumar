package com.capgemini.onlinemovieticketsystem.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.capgemini.onlinemovieticketsystem.dto.Theater;

@Repository
public class TheaterDaoImpl implements TheaterDao {
	
	@PersistenceUnit
	private EntityManagerFactory entityManagerFactory;

	@Override
	public List<Theater> searchTheater(String city) {
		List<Theater> list = new ArrayList<Theater>();
		EntityManager manager = entityManagerFactory.createEntityManager();
		String jpql = "from Theater where theaterCity=:city";
		TypedQuery<Theater> query = manager.createQuery(jpql, Theater.class);
		query.setParameter("city", city);
	    query.getResultList();
	    list = query.getResultList();
	    manager.close();
	    return list;
	}


}
