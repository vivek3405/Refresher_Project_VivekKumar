package com.capgemini.onlinemovieticketsystem.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import com.capgemini.onlinemovieticketsystem.dto.User;
import com.capgemini.onlinemovieticketsystem.exception.UserException;

@Repository
public class UserDaoImpl implements UserDao {

	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public User login(String userName, String password) {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from User where userName=:userName";
		TypedQuery<User> query = manager.createQuery(jpql, User.class);
		query.setParameter("userName", userName);
		try {
			User user = query.getSingleResult();
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			if (encoder.matches(password, user.getPassword())) {
				manager.close();
				return user;
			} else {
				manager.close();
				throw new UserException("Password Invalid");
			}
		} catch (Exception e) {
			manager.close();
			throw new UserException("User not valid");
		}
	}

	@Override
	public boolean register(User user) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(user);
			transaction.commit();
			manager.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			manager.close();
			throw new UserException("user already exist");
		}
	}

	@Override
	public boolean changePassword(int userId, String password) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		User bean = manager.find(User.class, userId);
		bean.setPassword(password);
		transaction.commit();
		manager.close();
		return true;
	}

	@Override
	public boolean deactivateAccount(int userId) {
		EntityManager manager=factory.createEntityManager();
		EntityTransaction transaction=manager.getTransaction();
		transaction.begin();
		User user=manager.find(User.class, userId);
		if(user!=null) {
			manager.remove(user);
			transaction.commit();
			manager.close();
			return true;
		}
		manager.close();
		throw new UserException("Customer Not Found");
	}
}
