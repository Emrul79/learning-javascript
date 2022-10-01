//problem 1:
// create a function that will take a string as an argument,the return this string with converting it to capitelizzed:

// solve:

let messege = [
  "something else here",
  "three are nothing but have a commt",
  "this is will be something amezing",
  "coding is my cardio",
  "i love to code in every single day",
];

function converter(array) {
  let elements = array.map((element) => {
    let myelement = element.split(" ");
    singlelemnet = myelement.map(
      (elll) => elll.charAt(0).toUpperCase() + elll.slice(1)
    );
    return singlelemnet.join(" ");
  });
  return elements;
}
console.log(converter(messege));
//problem-1:solved!!!