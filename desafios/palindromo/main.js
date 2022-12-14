str = "inovacao";

function checaPalindromo(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return (check = reverseStr === lowRegStr);
}
console.log(checaPalindromo(str));
