let messege = [
  "something else here",
  "three are nothing but have a commt",
  "giksagbhfi7uahew",
  "weihyu9ojjfgvr",
];
function anarray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

anarray(messege);
let string = "three are nothing but have a commt";
let hello = string.split(" ");
let myhel = hello.map((hel) => hel.charAt(0).toUpperCase() + hel.slice(1));
console.log(myhel.join(" "));

