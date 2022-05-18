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

//*Ejercicio 5

function reverse(txt) {
  const textoNuevo = txt.split("").reverse().join("");
  return textoNuevo;
}

reverse("ssdewdasd");

const reversa = (txt2) =>
  !txt2
    ? console.warn("es una cadena vacia")
    : (txt2 = txt2.split("").reverse().join(""));

//? '.split' convierte un string a un array , el '.reverse' invierte la matriz del arreglo y con '.join("")' convertimos el arreglo a una string .
reversa("lorem1123123kj12kjskdbakjsdnkajsndasdfad");
//*Ejercico 6
let textoAEncontrar = "hola me llamo franco, soy de franco".slice("");

const contador = (text = "", palabra = "") => {
  if (!text) return console.warn("es una cadena vacia");
  if (!palabra) return console.warn("es una cadena vacia");

  let i = 0;
  let cont = 0;

  while (i !== -1) {
    i = text.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      cont++;
    }
  }
  return console.info(
    `la palabra ${palabra} se repite ${cont} veces en la frase '${text}'`
  );
};

//*Ejercicio 7

const Palindromo = (palabra) => {
  let palabraOriginal = palabra.toUpperCase();
  let palabraReverse = palabraOriginal.split("").reverse().join("");
  const palindromo =
    palabraOriginal === palabraReverse
      ? console.info(
          `la palabla ${palabraOriginal} es un palindromo, al reves es ${palabraReverse}`
        )
      : console.info(
          `${palabraOriginal} no es un palindromo, palabla al reves ${palabraReverse}`
        );
  return palindromo;
};

//*Ejecicio 8

//? 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



const ReplaceFunc = (elm1, ...elm2) => {
  const entrada = [elm1, ...elm2];
  const replace = [];

  entrada.forEach((element, index) => {
    replace[index] = entrada[index].replace("asd", "");
    replace[index] === ""
      ? console.warn(`el elemento del indice ${index} es un 'asd'`)
      : console.log(replace[index]);
  });

 // console.log(replace);
};

// ReplaceFunc("asd", "asd2", "asdc4", "ascd5");

