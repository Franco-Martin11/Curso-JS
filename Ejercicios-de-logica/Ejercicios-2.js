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

//* Ejercicio-3

/*
? 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
? 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
? 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const ConversorTemp = (temp, tipo) => {
  if (!temp || !tipo) {
    console.warn("complete ambas casillas");
  } else if ((temp !== Number, tipo !== String)) {
    console.warn("Coloque los datos correctamente");
  }

  if (tipo === "C") {
    let resultado = (temp * 9) / 5 + 32;
    return resultado;
  } else if (tipo === "F") {
    let resultado = ((temp - 32) * 5) / 9;
    return resultado;
  } else {
    console.warn("coloque un tipo de grados correcto , F o C");
  }
};

//* (1)
const Primo = (num) => {
  let contador = 0;

  for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
      contador++;
    }
  }

  contador === 2
    ? console.info(`El numero ${num} es un numero primo`)
    : console.warn(`El numero ${num} no es un numero primo`);
};

//* (2)
const Par = (numero) => {
  !numero
    ? console.warn("No ingresastes un numero")
    : numero % 2 === 0
    ? console.log(`El numero ${numero} es par`)
    : console.warn(`El numero ${numero} no es par`);
};

//*(3)
