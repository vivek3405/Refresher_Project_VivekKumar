package com.capgemini.onlinemovieticketsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.onlinemovieticketsystem.dao.TheaterDao;
import com.capgemini.onlinemovieticketsystem.dto.Theater;

@Service
public class TheaterServiceImpl implements TheaterService {
	
	@Autowired
	private TheaterDao dao;

	@Override
	public List<Theater> searchTheater(String city) {
		return dao.searchTheater(city);
	}

}
