//* Ejercicio 24

/*

*27) Programa una clase llamada Pelicula.

*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  ? - Todos los datos del objeto son obligatorios.

  ?* - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.

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
    id = null,
    titulo,
    director,
    añoEstreno,
    pais,
    generos,
    calificacion,
  }) {
    this.IMBD = id;
    this.titulo = titulo;
    this.director = director;
    this.añoEstreno = añoEstreno;
    this.paises = pais;
    this.generos = generos;
    this.calificacion = calificacion;
    this.validarId(id);
  }

  //* OP.Ternario tiene un 'return' IMPLICITO
  //? Bloque de abstracciones
  validarString(propiedad, valor) {
    if (!valor) {
      return console.warn(`La ${propiedad} "${valor}" esta vacio `);
    }
    if (typeof valor !== "string") {
      return console.error("El dato ingresado no es una cadena de texto");
    } else {
      return true;
    }
  }

  validarTamañoString(propiedad, value, string) {
    string > value
      ? console.error(
          `La propiedad ${propiedad} debe tener como maximo "${value}" caracteres`
        )
      : true;
  }

  validarNumInt(propiedad, value) {
    typeof value !== "number" || value.length !== 4
      ? console.error(
          `El valor de ${propiedad} debe ser un numero de 4 digitos`
        )
      : true;
  }

  validarArray(propiedad, value) {
    !Array.isArray(value)
      ? console.error(`${propiedad} debe ser un arreglo`)
      : true;
  }

  validarGeneros(propiedad, genero, value) {
    let resultado;
    let errores = [];
    value.forEach((element) => {
      resultado = element.includes(genero);
      resultado === false ? errores.push(element) : true;
    });
    if (!resultado) {
      console.error(
        `La ${propiedad} no esta incluida en los generos acceptados `
      );
      console.warn(errores);
    }
  }
  //? Valida el IMBD utilizando el metodo 'validarString()' el cual solo se procesa si 'validarString' retorna 'true', sino da el 'console.warn()'

  validarId(id) {
    if (this.validarString("IMDB id", id) === true) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id : "${id}" no es valido, debe tener 9 caracteres , los primeros 2 letras minusculas, los 7 restantes numeros`
        );
      }
    }
  }
}

const nuevaPelicula = new Pelicula({ id: "" });

function prueba(getArray, Array) {
  let resultado;
  for (let i = 0; i < getArray.length; i++) {
    Array.forEach((element) => {
      return resultado = element === getArray[i];
    });
  }
  console.log(resultado)
}
