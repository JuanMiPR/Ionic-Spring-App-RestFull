package com.juanmi.bar.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.juanmi.bar.entity.models.Bar;

public interface IBarDao extends CrudRepository<Bar, String> {

}
