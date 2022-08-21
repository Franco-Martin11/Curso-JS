//CALLBACKS

//En estos casos son callbacks sincronicas ya que se ejecutan y se completan cuando se invocas , normarmente las callbacks son utilizadas de manera asaincronica en por ejemplo llamadas a API's.

const data = [2, 3, 4, 5];

Array.prototype.myEvilArray = function (callback) {
  const newArray = [];
  this.forEach((item) => newArray.push(callback(item)));
  return newArray;
};
//En este caso el objTHIS va hacer referencia al array que invoca el metodo 'myEvilArray'.
const result = data.myEvilArray((item) => item * 2 - 1);

//console.log(result);

const multiply = (param1, param2) => param1 * param2;

const funcionCall = (callback, items) => {
  const resultado = [callback, items];
  const resultadoFinal = resultado.reduce((prev, element) => prev + element, 0);
  console.log(`El resultado de [${resultado}] es : ${resultadoFinal}`);
  return resultadoFinal;
};

console.log(funcionCall(multiply(224, 2), 26));
