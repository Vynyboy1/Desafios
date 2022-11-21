function gets() {
  return 10;
}

function print(content) {
  console.log(content);
}

//forma 1
module.exports.gets = gets;
module.exports.print = print;

/* 
forma 2
definindo um objeto
module.exports = {
  gets: gets,
  print: print,
};
*/
