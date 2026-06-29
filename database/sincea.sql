-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2026 a las 02:32:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sincea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `matricula` varchar(15) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `carrera` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`matricula`, `nombre`, `curp`, `carrera`) VALUES
('0124040073', 'Cristobal Blas Yeshua', 'CIBY060510HOCRLSA0', 'Ingeniería en Computación'),
('0124040081', 'Omar Antonio García Cortés', 'GACO060403HOCRRMA5', 'Ingeniería en Computación'),
('0124040107', 'Marco Antonio Valladares Guerrero', 'VAGM060613HOCLRRA3', 'Ingeniería en Computación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificios`
--

CREATE TABLE `edificios` (
  `id` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `edificios`
--

INSERT INTO `edificios` (`id`, `nombre`, `descripcion`, `ubicacion`) VALUES
('1', 'Biblioteca', 'Acervo bibliográfico y sala de lectura.', 'biblioteca'),
('2', 'Auditorio', 'Espacio para eventos y conferencias', 'Auditorio'),
('3', 'Rectoria', 'Rectoria académica', 'Rectoria'),
('4', 'Laboratorio de Química', 'Laboratorio de prácticas de química', 'Laboratorio de Química'),
('5', 'Salas de Cómputo', 'Salas de cómputo 1 y 2', 'Salas de cómputo'),
('6', 'Cubículos de Profesores', 'Oficinas de atención a alumnos', 'Cubículos de profesores'),
('7', 'Edificio de Posgrado', 'Aulas y edificios de posgrado', 'Edificio de posgrado'),
('8', 'Instituto de la Energía', 'Laboratorios de energía renovables', 'Instituto de la energía'),
('9', 'Aulas de Diseño', 'Aulas de diseño en donde se diseñan', 'Aulas de diseño'),
('Aulas-modulo-1', 'Aulas Módulo 1', 'Aulas primer módulo', ''),
('Aulas-modulo-2', 'Aulas Módulo 2', 'Aulas segundo módulo', ''),
('Aulas-modulo-3', 'Aulas Módulo 3', 'Aulas tercer módulo', ''),
('Aulas-modulo-4', 'Aulas Módulo 4', 'Aulas cuarto módulo', ''),
('Aulas-modulo-5', 'Aulas Módulo 5', 'Aulas quinto módulo', ''),
('Aulas-modulo-6', 'Aulas Módulo 6', 'Aulas sexto módulo', ''),
('Casa-de-rector', 'Casa del Rector', 'Casa del rector', ''),
('Caseta-de-inversores', 'Caseta de Inversores', 'Caseta de inversores', ''),
('Cecyte', 'CECYTE', 'CECYTE', ''),
('Centro-de-idiomas', 'Centro de Idiomas', 'Centro de idiomas', ''),
('Departamento-de-profesores', 'Departamento de Profesores', 'Departamento de profesores', ''),
('Edificio-de-ingenieria-industrial', 'Edificio de Ingeniería Industrial', 'Edificio de Ingeniería Industrial', ''),
('Estatua', 'Estatua', 'Estatua Benito Juárez', ''),
('Laboratorio de química orgánica', 'Laboratorio de química orgánica', 'Laboratorio para estudiantes de Ing. Química', 'Laboratorio de química orgánica'),
('Laboratorio-de-electronica', 'Laboratorio de Electrónica', 'Laboratorio de Electrónica', ''),
('Laboratorio-de-energia', 'Laboratorio de Energía', 'Laboratorio de Energía', ''),
('Laboratorio-de-ingenieria-quimica', 'Laboratorio de Ingeniería Química', 'Laboratorio de Ingeniería Química', ''),
('Laboratorio-de-quimica-organica', 'Laboratorio de Química Orgánica', '', ''),
('Modulo-de-aulas-1', 'Módulo de Aulas 1', '', ''),
('Modulo-de-aulas-2', 'Módulo de Aulas 2', '', ''),
('path33', 'Recursos Materiales', '', ''),
('path38', 'Sistema Fotovoltaico (Ref 2)', '', ''),
('path39', 'Sistema Fotovoltaico (Ref 3)', '', ''),
('path40', 'Sistema Fotovoltaico (Ref 4)', '', ''),
('path41', 'Cancha de Basquetbol', '', ''),
('path42', 'Terreno de la Cancha', '', ''),
('Portico-de-acceso', 'Pórtico de Acceso', '', ''),
('Rectoría', 'Rectoría', 'Oficinas administrativas principales', 'Rectoría'),
('Sala-de-autoacceso', 'Sala de Autoacceso', '', ''),
('Salas-de-Cómputo', 'Salas de Cómputo', 'Salas equipadas con computadoras', 'Salas de Cómputo'),
('Sanitarios-generales', 'Sanitarios Generales', '', ''),
('Sistema-fotovoltaico', 'Sistema Fotovoltaico', '', ''),
('Talleres-de-disenio', 'Talleres de Diseño', '', ''),
('Vicerrectoria-academica', 'Vicerrectoría Académica', '', ''),
('Vicerrectoria-administrativa', 'Vicerrectoría Administrativa', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` int(11) NOT NULL,
  `id_maestro` int(11) NOT NULL,
  `materia` varchar(100) NOT NULL,
  `dia` varchar(100) NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id_horario`, `id_maestro`, `materia`, `dia`, `hora_inicio`, `hora_fin`) VALUES
(1, 3, 'Programación Web 2', 'Lunes', '08:00:00', '10:00:00'),
(2, 3, 'Programación Web 1', 'Martes', '08:00:00', '10:00:00'),
(3, 3, 'Programación Web 2', 'Miércoles', '08:00:00', '10:00:00'),
(4, 3, 'Programación Web 1', 'Miércoles', '10:30:00', '12:00:00'),
(5, 3, 'Redes de Computo', 'Miércoles', '12:30:00', '14:00:00'),
(6, 3, 'Redes de Computo', 'Jueves', '08:00:00', '09:30:00'),
(7, 3, 'Programación Web 1', 'Jueves', '11:00:00', '12:00:00'),
(8, 3, 'Programación Web 2', 'Viernes', '09:30:00', '10:30:00'),
(9, 3, 'Redes de Computo', 'Viernes', '12:30:00', '14:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `id_maestro` int(11) NOT NULL,
  `cubiculo` varchar(20) NOT NULL,
  `edificio` varchar(100) NOT NULL,
  `departamento` varchar(100) NOT NULL,
  `contacto` varchar(100) DEFAULT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maestros`
--

INSERT INTO `maestros` (`id_maestro`, `cubiculo`, `edificio`, `departamento`, `contacto`, `usuario`, `contrasena`, `nombre`) VALUES
(1, '21', 'Edificio de profesores', 'Ing. Computación', 'omarng@bianni.unistmo.edu.mx', 'Omar Nieva García', 'ong', 'Omar N. García'),
(2, '18', 'Edificio de Profesores', 'Ing. Computación', 'jjap@sandunga.unistmo.edu.mx', 'José J. Arellano Pimentel', 'jjap', 'José de Jesús Arellano Pimentel'),
(3, '20', 'Edificio de Profesores', 'Ing. Computación', 'thunder6321@gmail.com', 'José María Arellanes Moreno', 'jmam', 'José María Arellanes Moreno'),
(4, '20', 'Edificio de Profesores', 'Ing. Computación', 'gtoledo@sandunga.unistmo.edu.mx', 'Guadalupe Toledo Toledo', 'gtt', 'Guadalupe Toledo Toledo'),
(5, '15', 'Edificio de Profesores', 'Ing. Computación', 'dpachecob@bianni.unistmo.edu.mx', 'Daniel Pacheco Bautista', 'dpb', 'Daniel Pacheco Bautista'),
(6, '22', 'Edificio de Profesores', 'Ing. Computación', 'sergio2x@hotmail.com', 'Sergio Juarez Vázques', 'sjv', 'Sergio Juarez Vázques');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`matricula`),
  ADD UNIQUE KEY `curp` (`curp`);

--
-- Indices de la tabla `edificios`
--
ALTER TABLE `edificios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`),
  ADD KEY `restriccion 1` (`id_maestro`);

--
-- Indices de la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD PRIMARY KEY (`id_maestro`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `maestros`
--
ALTER TABLE `maestros`
  MODIFY `id_maestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `restriccion 1` FOREIGN KEY (`id_maestro`) REFERENCES `maestros` (`id_maestro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
