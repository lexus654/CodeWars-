// Credit Card Program

maskify = function (cc) {
  newString = String(cc);
  if (newString.length < 4) {
    console.log(newString);
  } else if (newString.length > 4) {
    text = newString.substr(-4);
    count = newString.length - 4;
    hide = "#";
    console.log(`${hide.repeat(count)}${text}`);
  }
};
maskify(121234);
// Descending Order function
descendingOrder = function (n) {
  //////////////// my solution///////////////////////////////////////////
  // arrayNumbers = Array.from(String(n), Number).sort(function (
  //   largest,
  //   smallest
  // ) {
  //   return smallest - largest;
  // });
  // newNumber = arrayNumbers.join("");
  // console.log(Number(newNumber));
  ////////////////////////////////////////// Best Solution
  console.log(parseInt(String(n).split("").sort().reverse().join("")));
};

descendingOrder(0234124);
