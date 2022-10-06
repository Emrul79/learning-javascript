//Recursion:
//Recursion is a problem solving technique where the solution depends on solution to smaller instance of the same problem.

//recurtion is when a function call itself!

//why recurtion?
//a great technique to simplify your solution.
//if you find yourself breaking down your problem into smaller versions of the same problem,recursion is very usefull.

//Analogy: if principal asked to two proffessor for getting student number.we can simplify it first!
//principel=> (proffessor1 -> (teacher1(40) + teacher2(45))) + (proffessor2 -> (teacher3(23) + teacher4(60)))
//firstly the sum of two sum return to the proffessors;then the sum of two proffessors return it to the principel.

//A few points about recursion.
//Every recursive solution needs to have a base case --a condition to terminate the recursion.
/*recursion might simpify solving a problem but it does not
always translate to a faster solution . A recursive solution may be 
for worse compared to an iterative solution */

//recursion is a topic that is not the most straight forward to understand. do not give up if you straggle with the concept!

//Recursive fibonacchi sequence:
//problem: give a number "n"  , find the n^th element of the fibonacchi sequence;

//in mathmatics , the fibonacchi sequence is a sequence in whice each number is the sum of the two procceding ones;
// the first two numbers in the sequence are 0 and 1 (0,1,1,2,3,5,8....);
// recursivefibonacchi(0)=0
// recursivefibonacchi(1)=1
// recursivefibonacchi(2)=1
// recursivefibonacchi(3)=2
// recursivefibonacchi(6)=8;

//tips for recursive solution:
//first you need to break down the problem into smaller version of the same problem;
//identify the best case for recursion;

//solve:
//if myfunc represent a function to calculate the fibonacchinumber,then==> myfunc(n)=myfunc(n-1)+myfunc(n-2);
//and now we need a best case to stop this loop:
//the best case in this problem is => myfunc(0)=0; and myfunc(1)=1;

function myfunc(n) {
  if (n < 2) {
    return n;
  } else {
    return myfunc(n - 1) + myfunc(n - 2);
  }
}

//using for loop the time complexity eas Linear==[O(n)];
//the time complexity for fibonacchi is O(n^2);

//recursive factorial of number!;
function factorial(n) {
  let result = 1;

  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//lets do it in recursive wayyy:
//technique: n! = n* (n-1)!
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
