drop database if exists barelcruce;
CREATE DATABASE `barelcruce`;
use barelcruce;
CREATE TABLE `clientes` (
  `dni_cliente` varchar(15) NOT NULL,
  `nombre_cliente` varchar(25) NOT NULL,
  `deuda_cliente` float NOT NULL,
  PRIMARY KEY (`dni_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `barelcruce`.`clientes`
(`dni_cliente`,
`nombre_cliente`,
`deuda_cliente`)
VALUES
("54133956y","juanmi",500)
,("54133356y","pepe",500);


select * from clientes;
