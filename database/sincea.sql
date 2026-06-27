-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2026 a las 05:27:21
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
CREATE DATABASE IF NOT EXISTS `sincea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sincea`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
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

DROP TABLE IF EXISTS `edificios`;
CREATE TABLE `edificios` (
  `id` int(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `ubicacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `edificios`
--

INSERT INTO `edificios` (`id`, `nombre`, `descripcion`, `ubicacion`) VALUES
(1, 'biblioteca', 'Acervo bibliográfico y sala de lectura.', 'Biblioteca'),
(2, 'Auditorio', 'Espacio para eventos y conferencias', 'Auditorio'),
(3, 'Rectoría', 'Oficinas administrativas principales', 'Rectoría'),
(4, 'Laboratorio de Química', 'Laboratorio de prácticas de química', 'Laboratorio de Química'),
(5, 'Salas de Cómputo', 'Salas equipadas con computadoras', 'Salas de Cómputo'),
(6, 'Cubículos de Profesores', 'Oficinas de atención a alumnos', 'Cubículos de profesores'),
(7, 'Edificio de Posgrado', 'Aulas y edificios de posgrado', 'Edificio de posgrado'),
(8, 'Instituto de la Energía', 'Laboratorios de energía renovables', 'Instituto de la energía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

DROP TABLE IF EXISTS `maestros`;
CREATE TABLE `maestros` (
  `id_maestro` int(11) NOT NULL,
  `cubiculo_jefatura` varchar(20) NOT NULL,
  `edificio_jefatura` varchar(100) NOT NULL,
  `contacto` varchar(100) DEFAULT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maestros`
--

INSERT INTO `maestros` (`id_maestro`, `cubiculo_jefatura`, `edificio_jefatura`, `contacto`, `usuario`, `contrasena`, `nombre`) VALUES
(1, '21', 'Edificio de profesores', 'correo', 'Omar Nieva García', 'ong', 'Omar N. García'),
(2, '18', 'Edificio de Profesores', 'correoelectronico', 'José J. Arellano Pimentel', 'jjap', 'José de Jesús Arellano Pimentel'),
(3, '20', 'Edificio de Profesores', 'correoelectronico', 'José María Arellanes Moreno', 'jmam', 'José María Arellanes Moreno'),
(4, '20', 'Edificio de Profesores', '9710000000', 'Guadalupe Toledo Toledo', 'gtt', 'Guadalupe Toledo Toledo');

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
-- Indices de la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD PRIMARY KEY (`id_maestro`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `edificios`
--
ALTER TABLE `edificios`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `maestros`
--
ALTER TABLE `maestros`
  MODIFY `id_maestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
