package com.juanmi.bar.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "clientes")
public class Bar implements Serializable {

	private static final long serialVersionUID = 1L;

	public Bar(String dni, @NotEmpty String nombre, @NotNull double deuda) {
		this.dni = dni;
		this.nombre = nombre;
		this.deuda = deuda;
	}

	public Bar() {
	}

	@Id
	@Column(name = "dni_cliente", unique = true, columnDefinition = "VARCHAR(15)")
	private String dni;

	@Column(name = "nombre_cliente")
	@NotEmpty
	private String nombre;

	@NotNull
	@Column(name = "deuda_cliente")
	private double deuda;

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getDeuda() {
		return deuda;
	}

	public void setDeuda(double deuda) {
		this.deuda = deuda;
	}

}
