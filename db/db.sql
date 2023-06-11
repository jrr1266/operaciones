create table operaciones(
id int(11) not null auto_increment,
fecha datetime null,
nombre varchar(30) not null,
tarjeta varchar(20) not null,
banco varchar(15) not null,
monto int(6) not null,
 moneda varchar(5) not null,
primary key(id)
);
create table registro(
id int(11) not null auto_increment,
nombre varchar(30) not null,
clave varchar(20) not null,
primary key(id)
);
