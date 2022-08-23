/*Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.*/

function destroyer([array, ...argumentos]) {
  const result = array.filter((e) => !argumentos.includes(e));
  return result;
}

destroyer([
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan",
]);
