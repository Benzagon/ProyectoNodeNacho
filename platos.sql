-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-10-2022 a las 18:58:56
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `menu_restaurant`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(60) NOT NULL,
  `categoria` varchar(60) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`id`, `tipo`, `categoria`, `nombre`, `precio`, `descripcion`) VALUES
(1, 'principal', 'minuta', 'Milanesa con papas fritas', 1800, 'Milanesa de carne con papas fritas'),
(2, 'principal', 'minuta', 'Milanesa con pure', 1600, 'Milanesa de carne con pure de papa'),
(3, 'principal', 'minuta', 'Hamburguesa con papas fritas', 1500, 'Hamburguesa con papas fritas'),
(4, 'principal', 'pasta', 'Fetuccini a la bolognesa', 1300, 'Fetuccini con salsa de tomate y carne'),
(5, 'principal', 'pasta', 'Fetuccini al pesto', 1400, 'Fetuccini con salsa pesto'),
(6, 'postre', 'helado', '2 bochas de helado', 600, '2 bochas de helado de los siguientes sabores: dulce de leche, chocolate, vainilla, frutilla, menta granizada'),
(7, 'postre', 'torta', 'Tiramisú', 700, 'Porción de tiramisú'),
(8, 'bebida', 'gaseosa', 'Coca-Cola', 300, 'Coca-Cola 500ml'),
(9, 'bebida', 'gaseosa', 'Sprite', 300, 'Sprite 500ml'),
(10, 'bebida', 'agua', 'Agua mineral sin gas', 200, 'Agua mineral sin gas 500ml');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
