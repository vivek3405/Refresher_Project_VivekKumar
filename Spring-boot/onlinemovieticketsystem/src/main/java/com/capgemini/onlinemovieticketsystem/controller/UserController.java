package com.capgemini.onlinemovieticketsystem.controller;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.onlinemovieticketsystem.dto.User;
import com.capgemini.onlinemovieticketsystem.dto.UserResponse;
import com.capgemini.onlinemovieticketsystem.service.UserService;

@CrossOrigin(origins ="*", allowedHeaders="*", allowCredentials ="true")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping(path = "/login-user", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse login(@RequestBody User user) {

		User userBean= service.login(user.getUserName(), user.getPassword());
		UserResponse response=new UserResponse();
		if(userBean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("User found for the credentials");
			response.setCustomer(Arrays.asList(userBean));
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("Credentials invalid");
		}
		return response;
	}
	@PostMapping(path = "/register-user", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse registerCustomer(@RequestBody User user) {
		UserResponse response=new UserResponse();
		if(service.register(user)) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("registered successfully");
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("User already exists");
		}
		return response;

	}
	@PutMapping(path = "/modify-password", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse changePassword(@RequestBody User user) {
		UserResponse response=new UserResponse();
		if(service.changePassword(user.getUserId(), user.getPassword())) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("password change succesfully");
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("user not found/password not changed");
		}
		return response;
	}
	@DeleteMapping(path="/deactivate-account/{userId}", produces=MediaType.APPLICATION_JSON_VALUE)
	public UserResponse deleteCustomer(@PathVariable("userId") int userId) {
		UserResponse response=new UserResponse();
		
		service.deactivateAccount(userId);
		response.setStatusCode(201);
		response.setMessage("success");
		response.setDescription("User Details Deleted");
		return response;
	}
}
