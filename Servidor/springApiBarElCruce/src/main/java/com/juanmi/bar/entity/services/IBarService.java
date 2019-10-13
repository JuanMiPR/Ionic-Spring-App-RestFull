package com.juanmi.bar.entity.services;

import java.util.List;

import com.juanmi.bar.entity.models.Bar;

public interface IBarService {
	public Bar consulta(String dni);

	public List<Bar> todosLosClientes();

	public void nuevoCliente(Bar cliente);

	public void actualizarCliente(Bar cliente, String dni);

	public void eliminarCliente(String dni);
	


}
