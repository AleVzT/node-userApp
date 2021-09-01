# node-userApp
BE server para aplicacion node-userApp

### Instalación 🔧

Una vez dentro de la carpeta principal debemos ejecutar desde la terminal el siguiente comando.

 ```
  npm install
 ```

esto instalará los paquetes y librerias necesarias para el funcionamiento de la app

Tambien es necesario ejecutar el comando
 ```
tsc --watch
 ```

para compilar el codigo typescript y generar el paquete Javascript.

finalmente tambien es necesario ejecutar el comando

```
nodemon dist/app
```

## NOTA:

Cabe destacar que esta aplicacion se conecta a una base de datos realizada en Mysql. Por lo cual es necesario tomar en cuenta este aspecto para el buen funcionamiento, acontinuacion dejo el script utilizacion para la creacion de la tabla

```
CREATE TABLE `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `cedula` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `correo_unique` (`correo`) USING BTREE,
  UNIQUE KEY `cedula_unique` (`cedula`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1
```

