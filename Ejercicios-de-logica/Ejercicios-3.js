//*Ejecicios 21:23

//? 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const Potencia = () => {
  let resultPotencia = [];
  const numbersArray = [1, 4, 5];
  /*  !base
    ? console.warn("Debe ingresar un numero base")
    : */
  numbersArray.forEach((element, index) => {
    let resultPotenciaParcial;
    resultPotencia.push((resultPotenciaParcial = Math.pow(element, 2)));
  });
  return resultPotencia;
};

//? 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const NumeroMaximo = (array) => {
  if (array === undefined) return console.warn("no ingresaste un arreglo");

  if (array.length === 0) return console.warn("el array esta vacio");

  for (let element of array) {
    if (typeof element !== "number")
      return console.warn(`el elemento ${element} no es un numero`);
  }

  return console.info(
    `Arreglo Original: ${array}\nValor Mayor:${Math.max(
      ...array
    )}\nValor Menor:${Math.min(...array)}`
  );
};

//!NumeroMaximo(arrayPI)

//? 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

let arrayPI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ParesImpares = () => {
  const arrayPares = [];
  const arrayImpares = [];

  const Metodo = (element) => {
    element % 2 === 0 ? arrayPares.push(element) : arrayImpares.push(element);
  };

  arrayPI.forEach((element) => {
    Metodo(element);
  });

  console.log({ Pares: [...arrayImpares] }, { Impares: [...arrayPares] });
};

//* Ejercicios 24:26

//? 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const Ordenamiento = (...element) => {
  const OrdenAscendente = [element];
  let OrdenDecentente = OrdenAscendente.reverse().join().split();

  //?console.log(arrayAnalizar)

  for (let index = 0; index < OrdenAscendente.length; index++) {
    for (let index = 0; index < OrdenAscendente.length; index++) {
      if (OrdenAscendente[index] >= OrdenAscendente[index + 1]) {
        let flag = OrdenAscendente[index];
        OrdenAscendente[index] = OrdenAscendente[index + 1];
        OrdenAscendente[index + 1] = flag;
      }
    }
  }
  console.log({ OrdenAscendente }, { OrdenDecentente });
};

//? 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//* El constructor 'Set' solo devuelve elementos unicos

const validacionDeDuplicados = (array) => {
  let data = array;
  const DataResolve = new Set(data);
  let result = [...DataResolve];
  return result;
};

//! Segunda Opcion

//? El metodo para array '.include(x)' analiza el array viendo si incluye el valor de su parametro, en este caso mediante el forEach si el array no incluye el elemento se utiliza el metodo '.push(x)' para agregarlo.

const validacionDeDuplicados2 = (array) => {
  let data = array;
  let resultado = [];
  data.forEach((element) => {
    !resultado.includes(element) ? resultado.push(element) : "";
  });
  return resultado;
};

//? 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const arrayparapromediar = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

//? El spreadOperator implicitamente convierte al parametro en Array

const ArrayPromedioo = (...array) => {
  let acumulador = 0;
  array.forEach((element) => {
    acumulador += element;
  });

  return acumulador / array.length;
};
