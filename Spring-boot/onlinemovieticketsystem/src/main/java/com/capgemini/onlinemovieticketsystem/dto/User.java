package com.capgemini.onlinemovieticketsystem.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class User {
	
	@Id
	@Column
	@GeneratedValue
	private int userId;
	@Column
	private String userName;
	@Column
	private String fullName;
	@Column
	private String password;
	@Column
	private String emailId;
	@Column
	private String mobileNumber;
	@Column
	private String dateOfBirth;
	@Column
	private String gender;


}
