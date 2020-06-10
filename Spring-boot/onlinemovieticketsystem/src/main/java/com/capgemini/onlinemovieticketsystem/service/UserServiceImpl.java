package com.capgemini.onlinemovieticketsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.capgemini.onlinemovieticketsystem.dao.UserDao;
import com.capgemini.onlinemovieticketsystem.dto.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao dao;

	@Override
	public User login(String userName, String password) {
		return dao.login(userName, password);
	}

	@Override
	public boolean register(User user) {
		BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		return dao.register(user);
	}

	@Override
	public boolean changePassword(int userId, String password) {
		BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(password);
		return dao.changePassword(userId, encodedPassword);
	}

	@Override
	public boolean deactivateAccount(int userId) {
		return dao.deactivateAccount(userId);
	}

}
