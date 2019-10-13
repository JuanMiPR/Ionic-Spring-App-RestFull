package com.juanmi.bar.entity.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juanmi.bar.entity.models.Bar;
import com.juanmi.bar.entity.services.IBarService;

@RestController
@CrossOrigin(origins = "*")
public class BarController {
	private List<Bar> lista;
	@Autowired
	IBarService barServices;

	@GetMapping("/listadoClientes")
	public List<Bar> todosLosClientes() {

		return barServices.todosLosClientes();
	}

	@GetMapping("/consultaCliente/{dni}")
	public Bar consulta(@PathVariable(name = "dni") String dni) {

		return barServices.consulta(dni);

	}

	@PostMapping("/addClient")
	public void añadirCliente(Bar auxcliente) {

		barServices.nuevoCliente(auxcliente);

	}

	@PutMapping("/actualizarCliente/{dni}")
	public void actualizarCliente(Bar cliente, @Valid @PathVariable(name = "dni") String dni) {

		barServices.actualizarCliente(cliente, dni);

	}

	@DeleteMapping("/eliminarCliente/{dni}")
	public void eliminarCliente(@PathVariable(name = "dni") String dni) {
		if (!dni.isEmpty()) {
			barServices.eliminarCliente(dni);
		} else {
			System.out.println("Introduzca un valor en el campo");

		}
	}
}
