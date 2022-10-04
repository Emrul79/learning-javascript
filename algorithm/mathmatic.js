//problem-1:Fibonacchi sequence->Give a number 'n',find the first 'n' elements of the Fibonacchi sequence;
//In mathmatics,the Fibonacchi sequence is the sequence in whice each number is the sum of the two precending one.
//input:(2)->output->[0,1];
//input:(4)->output->[0,1,1,2];

function fibonacchi(n){
    let myarray=[0,1];
    for(var i=2; i<n; i++){
        myarray[i]= myarray[i-1] + myarray[i-2]
    }
    return myarray
}
// console.log(fibonacchi(6));
// console.log(fibonacchi(9));
// console.log(fibonacchi(11));

//solved!!
//the time complexity of this algorithm is Linear=>O(n),because it has one for loop and the loop depends on input number.



// problem-2:Factorial of a number.
//Give an integer 'n' , find the factorial of the integer;
//in mathmatics ,the factorial of a non-negative integer 'n' , denoted n! , is the product of all positive integers less than or equal to "n";
//facorial of zero(1);
//factorial(4) = 4*3*2*1=24;

function factorial(n){
   let result=1;
   for (var i=2; i<=n; i++){
    result *= i;
   }
   return result;
}
// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(8));

//solved;
//the time complexity of this algorithm is Linear=>O(n),because it has one for loop and the loop depends on input number.
