str = "inovacao";

function checaPalindromo(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  let check = reverseStr === lowRegStr;
  if (check) {
    return "TRUE";
  }
  return "FALSE";
}
console.log(checaPalindromo(str));
