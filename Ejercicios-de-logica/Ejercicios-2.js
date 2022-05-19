//* Ejercicios-2

/**
 * ? 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 * ? 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 * ? 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

const numAleatorio = (min, max) => {
  let number = Math.random() * (max - min) + min;
  number = Math.floor(number);
  return number;
};

const capicua = (numero) => {
  if (!numero) {
    console.warn("No ingresaste un numero");
  } else if (numero >= 0 && numero <= 9) {
    console.warn("El numero es de una sola cifra");
  } else {
    let numeroAnalizado = numero.toString();
    let numeroAnalizar = numero.toString().split("").reverse().join("");
    if (numeroAnalizar === numeroAnalizado) {
      return true;
    } else {
      return false;
    }
  }
};

const Factorial = (factor) => {
  let factorialResult = 1;
  for (let index = 1; index <= factor; index++) {
    factorialResult = index * factorialResult;
  }
  console.log(factorialResult);
};

Factorial(4);
