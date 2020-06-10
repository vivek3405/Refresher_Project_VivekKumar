package com.capgemini.onlinemovieticketsystem.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class Theater {
	
	@Id
	@Column
	private int theaterId;
	@Column
	private String theaterName;
	@Column
	private String theaterCity;
	@Column
	private String managerName;
	@Column
	private String managerContact;

}
