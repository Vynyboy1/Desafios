let resultado = 6;

function fizzBuzz(resultado) {
  if ((resultado % 5 === 0) & (resultado % 3 === 0)) {
    return "FizzBuzz";
  } else if (resultado % 5 === 0) {
    return "Buzz";
  } else if (resultado % 3 === 0) {
    return "Fizz";
  } else {
    return resultado;
  }
}

console.log(fizzBuzz(resultado));
