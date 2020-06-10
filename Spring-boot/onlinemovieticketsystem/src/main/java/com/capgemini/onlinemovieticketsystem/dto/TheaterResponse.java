package com.capgemini.onlinemovieticketsystem.dto;

import java.util.List;

import lombok.Data;

@Data
public class TheaterResponse {
	private int statusCode;
	private String message;
	private String description;
	private List<Theater> customer;

}
