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

const arrayPI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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
