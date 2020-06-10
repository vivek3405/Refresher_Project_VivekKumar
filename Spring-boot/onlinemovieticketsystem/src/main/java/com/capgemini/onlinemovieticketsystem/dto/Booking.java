package com.capgemini.onlinemovieticketsystem.dto;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class Booking {
	
	@Id
	@Column
	private int userId;
	@Column
	private String bookingId;
	@Column
	private String movieId;
	@Column
	private String theaterId;
	@Column
	private String bookingDate;
	@Column
	private double totalCost;
	@Column
	private String seat;
	@Column
	private String movieName;
	@Column
	private String theaterName;
	@Column
	private String movieTime;

}
