package com.capgemini.onlinemovieticketsystem.service;

import com.capgemini.onlinemovieticketsystem.dto.User;

public interface UserService {

	public User login(String userName, String password);
	public boolean register(User user);
	public boolean changePassword(int userId, String password);
	public boolean deactivateAccount(int userId);
}
