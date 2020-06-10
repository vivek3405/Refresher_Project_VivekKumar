package com.capgemini.onlinemovieticketsystem.dao;

import com.capgemini.onlinemovieticketsystem.dto.User;

public interface UserDao {
	
	public User login(String userName, String password);
	public boolean register(User user);
	public boolean changePassword(int userId, String password);
	public boolean deactivateAccount(int userId);
}
