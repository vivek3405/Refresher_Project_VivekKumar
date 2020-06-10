package com.capgemini.onlinemovieticketsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.onlinemovieticketsystem.dto.Theater;
import com.capgemini.onlinemovieticketsystem.dto.TheaterResponse;
import com.capgemini.onlinemovieticketsystem.service.TheaterService;

@CrossOrigin(origins ="*", allowedHeaders="*", allowCredentials ="true")
@RestController
public class TheaterController {
	
	@Autowired
	private TheaterService theaterService;
	
	@GetMapping(path = "/search-theater/{city}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TheaterResponse searchDoctor(@PathVariable("city") String theaterCity){
		TheaterResponse response = new TheaterResponse();
		List<Theater> list = theaterService.searchTheater(theaterCity);
		if (list != null) {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("theater found");
			response.setCustomer(list);
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("theater not exist");
		}
		return response;
	}

}
