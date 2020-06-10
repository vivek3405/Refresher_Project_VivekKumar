package com.capgemini.onlinemovieticketsystem.service;

import java.util.List;

import com.capgemini.onlinemovieticketsystem.dto.Theater;

public interface TheaterService {

	public List<Theater> searchTheater(String city);
}
