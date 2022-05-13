//*<---Ejercicio 1,2--->

//!1. En caso de no poner el segundo parametro va a imprimir en consola el array completo.

//? 2. Este metodo lo que hace es recibir por parametro un 'string' y luego mediante la propiedad 'split' convertir cada caracter a un array.Luego muestra en consola dicho array asigado a la variable 'resultado'.

const Metodo = {
  contador(string) {
    let resultado = string.split();
    console.log(resultado);
  },

  delimitador(string, caracteres = undefined) {
    let resultado = null;
    !string
      ? console.warn("es una cadena vacia")
      : (resultado = string.slice("", caracteres));
    console.log(resultado);
  },
};

/*
Metodo.contador("hola mundo");
Metodo.contador("hola mundo soy franco");
Metodo.delimitador("hola mundo", 9);
Metodo.delimitador("holaquetal", 3);*/

//*<---Ejercicio 3--->

//*<---Ejercicio 4--->
const Metodo2 = {
  repetidor(string, veces) {
    let resultado = string.repeat(veces);
    console.log(resultado);
  },
};

//Metodo2.repetidor("hola", 22);

//* Ejercicio refactor

const prueba223 = (cadena) =>
  !cadena
    ? console.warn("es una cadena vacia")
    : console.info(
        `la cadena "${cadena}" tiene esta cantidad de caracteres ${cadena.length} `
      );

/*prueba223("hola me llamo franco");
prueba223();
prueba223("hola");*/

//* ejercicio 3

const devolver = (string = " ", separador = undefined) =>
  !string
    ? console.warn("es una cadena vacia")
    : separador == undefined
    ? console.warn("no ingresaste un separador")
    : console.info(cadena.split(separador));

//devolver(""," ")
