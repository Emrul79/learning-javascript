let s =
  "hello hello emrul hassan biplob this hello hello emrul hassan biplob this biplob is emrul hassan biplob working in here gifgsa eoh78iug4 ugigwrqei uqwyetrity43 amader desher nam bangladesh biplob is emrul hassan biplob working in here";

// console.log(s.split(' '));

function convert(string) {
  let convering = string.split(" ");
  let conder = convering.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  return conder.join("  ");
}
function duplycate(string) {
  let dupli = string.split(" ");
  let arr = dupli.filter((str, index) => {
    //time complexity= O(n);

    return dupli.indexOf(str) === index; //time complexity= O(n);
  });
  let newarr = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)); //time complexity= O(n);

  return newarr.join(" ");
}

console.log(duplycate(s));
