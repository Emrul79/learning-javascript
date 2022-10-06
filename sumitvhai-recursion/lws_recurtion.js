//learn recursion with sumit vhai!
//when a function call itself inside it's body=>recursion.
let myfunction = function () {
  myfunction();
};

//use-case:
//task: 1+ 2+ 3+ 4+ ............+ n;

//if we do this task with for loop:
let result = 0;
let totalNumber = 20;
for (var i = 0; i <= 20; i++) {
  result += i;
}
//in above solution we can notice something.
//loop iteration:
//0+1=1=>
//1+1=2=>
//2+1=3=>
//3+1=4=>
//4+n=....!
//this is way of terate this loop.

//so the formulla is: last total + current value = current total;

//but when it's talk about recurtion ,then we have to think in recursive way!
//so we should think in a functional way.

//f(1)=>n=1;
//f(2)=>n=2;
//f(3)=>n=3;
//last total [f(n-1) ] + current value [(n)] = current totall; [f(n)]

//so lets make a recursive function:
function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

//in this case: when we call sum(3)=>
//what happend in the behind the seen is:
//sum(3)=>sum(2)+3=>sum(1)+5=>sum(0)+6;  //main output will be 6;

//if we have this type of mathmatical problem then we can solve it in a simplest way!

let n = 100000;
//method: n*(n+1)/2
console.log((n * (n + 1)) / 2);
