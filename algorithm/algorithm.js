/* what is algorithm?

An algorithm is a set of well-defined instructions to solve a particular problem.
(Ingredients) --> (Recipe) --> (Tasty dish)!


algorithm works as same of the above secuence.[(input) --> (algorithm) --> (output).  ]
algorithm is language independent.we can implement it with any type of language. */


//why algorithm?
//As a developer you're going to come accross problems that you need to solve.learning algorithm translates to learning different techniques to effciently solve those problems
//one problem can be solved in many ways using diffenrt algorithms.
//every algorithm comes with its own tradeoffs when it comes to perfonmance.


//algorithm analysis:
//there are multiple ways to solve one problem.
//so we sould go with the algorithm whice have the better performence..
//the absolute running time of an algorithm can not be predicted ,since it depends ona number of factors.


/* 1.programming language used to implement the algorithm.
2.the computer the program runs on.
3.other programs running at the same time.
4.quality of the oparating system.  */

//algorithm analysis contd:
//we evaluate the performance of an algorithm in terms of its input size.
//time complexity: amount of time taken by an algorithm to run, as a function of input size.
//space complexity: amount of memory taken by an algorithm to run,as a function of input size.
//by evaluating against the input size ,the analysis is not only machine independent but the comparison is also more appropiate.


//Big-O notation:
//the worst case complexity of an algorithm is represented using the Big-O notation.
//big-o notation describes the complexity of an algorithm using algebric terms.
//it has two important characteristics
//1.it is expressed in turms of the input.
//it focuses on the bigger picture without getting caught up in the minute details.


//Big-O time complexity.
function summation(n){
    let sum=0;
    for(var i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}
summation(4)
//in the function ,if n=5; 
//line 1 exicute once.
//line 2 exicute once.
//line 3 is a loop defination.it also run once.
//return line also run once.
//***but line 4 ,it is in the loop. so it will exicute 5 times as n=5;
//***if n=1000? it will exicute 1000 times. so it depends on input n.(time complexity is defended on the input size)
//so we can say that: loop will defends on input (n);


//Big-O  time complexity focuses on the bigger picture without getting caught up in the minute details.


//Time -Complexity:
//1. O(n)--> Linear time complexity ; what thats mean is that=size of the input increases the time complexity also increases.
//any time you see a loop in your algorithm , most of the time you can safely say the time complexity is atleast linear (not fixed but most of the time).

//2. O(1)--> Constant time complexity ; for example:- 
function summaTionwithConstant(n){
       return n/2 * (n + 1)
}
//it also doing the same thing as our previous function do. 
//but it has no loop. it axicute only once whatever the input is.
//so it's time complexity is fixed=> O(1);

/*TRICKS:
1.if function has 2 loop inside, the complexity will be = O(n^2) or Quadratic.
2.if function has 3 loop inside, the complexity will be = O(n^3) or Cubic.
*/


/*
***Space Complexity*** /it's idea also remain same.


1.if the memory does not depend on the input size. the space-complexity is Constant=> O(1);
-> for example the sorting algorithm will sort the whole array without using additional array. so it's complexity will be constant.
2. if the proggram needed extra space and it grows with the input size growses then the complexity will be linear. O(n);
3.if the proggram needed extra spaces but not as the size of input. the the complexity will be Logarithmic . O(logn);
*/

