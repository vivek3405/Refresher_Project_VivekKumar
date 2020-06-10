package com.capgemini.onlinemovieticketsystem.dao;

import java.util.List;

import com.capgemini.onlinemovieticketsystem.dto.Theater;

public interface TheaterDao {
	
	//public Theater searchTheater(int TheaterId);
	public List<Theater> searchTheater(String city);
}
