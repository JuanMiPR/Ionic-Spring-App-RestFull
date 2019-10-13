package com.juanmi.bar.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juanmi.bar.entity.dao.IBarDao;
import com.juanmi.bar.entity.models.Bar;

@Service
public class BarServiceImpl implements IBarService {

	@Autowired
	private IBarDao barDao;

	@Override
	public Bar consulta(String dni) {
		
		return barDao.findById(dni).get();
	}

	@Override
	public List<Bar> todosLosClientes() {

		return (List<Bar>) barDao.findAll();
	}

	@Override
	public void nuevoCliente(Bar cliente) {
		barDao.save(cliente);

	}

	@Override
	public void eliminarCliente(String dni) {
		barDao.deleteById(dni);

	}

	@Override
	public void actualizarCliente(Bar cliente, String dni) {
		barDao.findById(dni).ifPresent((x) -> {
			cliente.setDni(dni);
			barDao.save(cliente);

		});

	}

	

}
