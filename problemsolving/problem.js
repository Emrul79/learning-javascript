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

//problem-1:solved!!!

//problem:2-given a sentence 's' and integer 'k' .return the first 'k' works of sentence s.

//solution:1=

function sliceArray(string, stop) {
  let newString = string.split(" ");
  newString.length = stop;
  return newString.join(" ");
}

//solution:2
function mySlice(string, stop) {
  let splitString = string.split(" ");
  let newSAtring = [];
  for (let i = 0; i < stop; i++) {
    newSAtring.push(splitString[i]);
  }
  return newSAtring.join(" ");
}

// solution:3

function slc(s, k) {
  let count = 0;
  for (var i = 0; i < s.length; i++) {
    s[i] === " " && count++;
    console.log(count);
    if (count === k) {
      s = s.slice(0, i);
      break;
    }
  }
  return s;
}

//problem:3
//given an array of integers "nums" .return an array that contanis the running sums of element!

// solution:
function sumofPreviousArray(array) {
  for (var i = 1; i < array.length; i++) {
    array[i] += array[i - 1];
  }
  return array;
}

//problem:4
//given an integer number.check weather the number is palindrome or not!

function ispalindrome(number){
  let reminder;
let reverse = 0;
let orginal = number;
while (orginal > 0) {
  reminder = orginal % 10;
  reverse= reverse * 10 + reminder;
  orginal= Math.floor(orginal/10)
}
}
ispalindrome(121)