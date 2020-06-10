package com.capgemini.onlinemovieticketsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.onlinemovieticketsystem.dto.Booking;
import com.capgemini.onlinemovieticketsystem.dto.BookingResponse;
import com.capgemini.onlinemovieticketsystem.service.BookingService;

@CrossOrigin(origins ="*", allowedHeaders="*", allowCredentials ="true")
@RestController
public class BookingController {
	
	@Autowired
	private BookingService service; 

	@PostMapping(path = "/add-", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public BookingResponse ticketBooking(@RequestBody Booking ticket) {
		BookingResponse response=new BookingResponse();
		if(service.addTicket(ticket)) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("ticket added successfully");
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("already booked");
		}
		return response;

	}
	@GetMapping(path = "/search-ticket/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public BookingResponse searchTicket(@PathVariable("userId") int ticketUserId){
		BookingResponse response = new BookingResponse();
		List<Booking> list = service.searchTicket(ticketUserId);
		if (list != null) {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("ticket found");
			response.setTicket(list);
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("ticket not exist");
		}
		return response;
	}
	@DeleteMapping(path="/delete-ticket/{userId}", produces=MediaType.APPLICATION_JSON_VALUE)
	public BookingResponse deleteCustomer(@PathVariable("userId") int userId) {
		BookingResponse response=new BookingResponse();
		
		service.deleteBooking(userId);
		response.setStatusCode(201);
		response.setMessage("success");
		response.setDescription("Customer Details Deleted");
		return response;
	}
}
