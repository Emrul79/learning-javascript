//problem: Given two finite non-empty sets , find their Cartisian product;
//In mathmatics , speccially set theory , the cartisian product of two sets A & B . denoted A * B , is the set of all ordered pairs (a,b) where a is in A and b is in B;

/* for example:
const A= [1,2];
const B= [3,4];
A*B=[1,3],[1,4],[2,3],[2,4]


//idea of cartisian product:
*traverse each array and pair each element in the first array with each array in the second array;
*/

function cartisian(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

//time complexity of this algorithm is O(n^2);beacuse we use two perameter ,and both of the length are same;
//time complexity will change when both of the length doesn't match ; then time complexity will be O(n * m);

//Climbing staircase  of "n" steps, count the number of distnct ways to climb to the top. you can wither climb 1 step or 2 steps at a time;

/*
for example: 
    n=1, climbingStairCase(1)=1     || (1);
       n=2, climbingStairCase(2)=2     || (1,1) and (2)
          n=3, climbingStairCase(3)=3     || (1,1,1) and (1,2) and (2,1)
             n=4, climbingStairCase(4)=5     || (1,1,1,1) and (1,1,2) and (1,2,1) and (2 ,1 , 1),(2,2);

    *at any given time , you can climb eaither 1 step and 2 steps;
    *if you have to climb to step "n", we can only climb for step"n-1" or "n-2"
    *calculate the ways camn climb to "n-1" and "n-2"  steps and add the two;
    *climbingStairCase(n)= climbingStairCase(n-1) +       climbingStairCase(n-2)       
*/



function climbingStairCase(n){
   const arr=[1,2];
   for(let i=2; i<=n; i++){
    arr[i]=arr[i-1]+ arr[i-2]
   }

   return arr[n-1];

}
console.log(climbingStairCase(4));//output=5;

//
//[1,2,3,5,8,13]



//tower of hanoi:
/* the objective of the puzzle is to move the entire stack to the last rod ,obeing the following rules;
1.only one disk may be move at a time.
2.each move consists of taking the upper disk from one of the stack and placing it on top of another stack 
or on an empty rod. an lastly,
3.no disk may be placed on top of a disk that is smaller.
*/


//solution the problem of tower of hanoi:


function towerOfHanoi(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`move disk 1 from ${fromRod} to ${toRod}`);
        return
    }

    towerOfHanoi(n-1,fromRod,usingRod,toRod);
    console.log(`move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1,usingRod,toRod,fromRod)
}

//towerOfHanoi(4,'a','c','b')

//the time complexity of this progrram is : O(2^n);



