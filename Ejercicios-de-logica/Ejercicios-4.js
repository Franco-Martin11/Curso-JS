//* Ejercicio 24

/*

*27) Programa una clase llamada Pelicula.

*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  ? - Todos los datos del objeto son obligatorios.

  ? - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.

  ? - Valida que el título no rebase los 100 caracteres.

  ? - Valida que el director no rebase los 50 caracteres.

  ? - Valida que el año de estreno sea un número entero de 4 dígitos.

  ? - Valida que el país o paises sea introducidos en forma de arreglo.

  ? - Valida que los géneros sean introducidos en forma de arreglo.

  ? - Valida que los géneros introducidos esten dentro de los géneros aceptados*.

  ? - Crea un método estático que devuelva los géneros aceptados*.

  ? - Valida que la calificación sea un número entre 0 y 10 pudiendo ser  decimal de una posición.

  ? - Crea un método que devuelva toda la ficha técnica de la película.

  ? - Apartir de un arreglo con la información de 3 películas genera 3 

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

!instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

*/

class Pelicula {
  constructor({
    IMBD,
    titulo,
    director,
    añoEstreno,
    pais,
    generos,
    calificacion,
  }) {
    this.IMBD = IMBD;
    this.titulo = titulo;
    this.director = director;
    this.añoEstreno = añoEstreno;
    this.paises = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(IMBD);
  }

  //* OP.Ternario tiene un 'return' IMPLICITO

  validarString(propiedad, valor) {
    !valor ? console.warn(`La ${propiedad} "${valor}" esta vacio `) : "";

    typeof valor !== "string"
      ? console.error(
          `${propiedad} "${valor}" ingresado, No es una cadena de texto`
        )
      : true;
  }

  //? Valida el IMBD utilizando el metodo 'validarString()' el cual solo se procesa si 'validarString' retorna 'true', sino da el 'console.warn()'

  validarIMDB(IMBD) {
    if (this.validarString("IMDB id", IMBD)) {
      !/^(a-z)[2](0-9)[7]$/.test(IMBD)
        ? console.warn(
            `IMDB id "${IMBD}" no es valido, debe tener 9 caracteres, los 2 primero letras minusculas,los 7 restantes numeros`
          )
        : "";
    }
  }
}
const generosAceptador = [
  "thriller",
  "suspense",
  "drama",
  "animation",
  "fiction",
];
function getLengthObject(objeto) {
  let lengthObj = Object.keys(objeto).length;
  return lengthObj;
}

const peliculaNueva = new Pelicula({
  IMBD: "ff1234567",
  titulo: "hola que tal",
  director: "arnold schwarseneger",
  añoEstreno: 2021,
  pais: "argentina",
  generos: "thriller",
  calificacion: 7,
});
