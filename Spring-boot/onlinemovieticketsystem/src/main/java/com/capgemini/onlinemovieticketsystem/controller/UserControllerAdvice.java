package com.capgemini.onlinemovieticketsystem.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.capgemini.onlinemovieticketsystem.dto.UserResponse;
import com.capgemini.onlinemovieticketsystem.exception.UserException;

@RestControllerAdvice
public class UserControllerAdvice {

	@ExceptionHandler(UserException.class)
	public UserResponse handleCustomerException(UserException e) {
		UserResponse response = new UserResponse();
		response.setStatusCode(501);
		response.setMessage("Exception");
		response.setDescription(e.getMessage());
		return response;
	}
}
