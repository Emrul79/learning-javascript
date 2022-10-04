//problem-1:Fibonacchi sequence->Give a number 'n',find the first 'n' elements of the Fibonacchi sequence;
//In mathmatics,the Fibonacchi sequence is the sequence in whice each number is the sum of the two precending one.
//input:(2)->output->[0,1];
//input:(4)->output->[0,1,1,2];

function fibonacchi(n) {
  let myarray = [0, 1];
  for (var i = 2; i < n; i++) {
    myarray[i] = myarray[i - 1] + myarray[i - 2];
  }
  return myarray;
}
// console.log(fibonacchi(6));
// console.log(fibonacchi(9));
// console.log(fibonacchi(11));

//solved!!
//the time complexity of this algorithm is Linear=>O(n),because it has once for loop and the loop depends on input number.

// problem-2:Factorial of a number.
//Give an integer 'n' , find the factorial of the integer;
//in mathmatics ,the factorial of a non-negative integer 'n' , denoted n! , is the product of all positive integers less than or equal to "n";
//facorial of zero(1);
//factorial(4) = 4*3*2*1=24;

function factorial(n) {
  let result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(8));

//solved;
//the time complexity of this algorithm is Linear=>O(n),because it has once for loop and the loop depends on input number.

// problem-3: Prime Number
// given a natural number 'n' , determine if the number is prime or not .
//a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
//input: isprime(5)=>output=true;
//input: isprime(6)=>output=false;

function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//if we do it directly with (n) then time complexity is O(n);
//if we use Math.sqrt(n) then the time complexity is O (sqrt(n))!
//firstly we use n directly then we use Math.sqrt(n);because it is more efficient.
// console.log(isPrime(12));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(6));

//Problem-4: Give a positive number integer "n" , determine if the number is a power of 2 or not;
//An interger is a power of two if there exists an intger "x" such that "n"===2^x;
//isPowerofTwo(1)=>output=true;
//isPowerofTwo(4)=>output=true;
//isPowerofTwo(5)=>output=false;

function isPowerofTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
        return false;
    }
    n = n / 2;
  }
  return true;
}
// console.log(isPowerofTwo(1));
// console.log(isPowerofTwo(3));
// console.log(isPowerofTwo(32));
// console.log(isPowerofTwo(16));
// console.log(isPowerofTwo(13));

//problem is solved. and the time complexity of this algorithm is O(n)==Linear!!!


//problem-5: Palindrome number check;
//a number is said to be palindrome if its same on reading from both ends!

function isPalendrome(n){
    let reverse=0;
    let primary=n;
    while(n>0){
        let remainder= n%10;
        reverse= reverse * 10 + remainder;//121
        n = Math.floor(n / 10);
    }
    if(reverse===primary) return true;
    return false;
}
// console.log(isPalendrome(121));
// console.log(isPalendrome(262));
// console.log(isPalendrome(100));
// console.log(isPalendrome(12));

//time complexity => Linear(O(n))


