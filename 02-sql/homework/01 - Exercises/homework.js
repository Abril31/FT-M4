/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "SELECT * FROM movies WHERE duration < 90";

const ejercicio03 = "SELECT * FROM movies WHERE year >= 1930 AND year <= 1940";

const ejercicio04 = "SELECT * FROM movies WHERE title LIKE '%til%'"; //para acceder a un fragmento de un string

const ejercicio05 = "SELECT * FROM movies WHERE array_length(actors, 1) = 1"; //el array es de una dimensión, que es necesario especificar, es el segundo parámetro.

const ejercicio06 =
  "SELECT title, (SELECT AVG(value::numeric) FROM unnest(ratings) AS value) AS average_ratings FROM movies";
//AVG... -- Calcula el promedio de los valores del arreglo //unnest-- Convierte el arreglo en filas y obtiene el valor

const ejercicio07 =
  "SELECT * FROM movies WHERE title LIKE '%Fast and%' AND year=2016";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};
