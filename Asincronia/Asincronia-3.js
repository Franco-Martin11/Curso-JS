//* Async/Await

//? Las funciones asincronas (async/await) viene a trabajar junto a las promesas

//* Estas funciones se declaran con la sentencia async y se utiliza el metodo await para esperar la resolucion de ejecucion

//? Esta funcion va a esperar (await) que termine la ejecucion de una instruccion para seguir con las demas.

//* Esto se puede ver facil mente en la ejecucion (event loop), ya que no va a seguir ejecutando los demas procesos hasta que el await se cumpla.

async function PromiseFeaching() {
  try {
    let obj = await PromiseFuncNegada(5);
    let obj2 = await PromiseFuncNegada(225);
    console.log(obj2);
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
}

//PromiseFeaching();

const promiseFunction = (value, timein) => {
  if (typeof value !== "number") {
    return Promise.reject(
      `El parametro ${value} no es un tipo de dato aceptado`
    );
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * 50,
      });
    }, timein);
  });
};

const funcionPromesa = async () => {
  try {
    let obj = await promiseFunction(222, 1500);
    let obj2 = await promiseFunction(22, 2200);
    console.log(obj2);
    console.log(obj);
  } catch (error) {
    console.warn(error);
  }
};

funcionPromesa();

//* Esta forma de ejecucion asincronica se expresa dentro de un bloque TRY/CATCH. En el bloque try se va a ejecutar el codigo y va a dar un resolve de la promesa, en caso de haber un error el catch tomara las instrucciones del reject
