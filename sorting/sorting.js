// sorting algorithm;
/*
1.bubble sort;
2.insertion sort;
3.quik sort;
4.merge sort;
*/

//Bubble sort;
//problem : given an array of integers. sort the array;
//sorting will either be ascending or decending;
//const array = [-9,8,5,-2,4,6] ;
//bubblesort(array)=> [-9,-2,4,5,6,8];

//bubble sort idea:
//compare adjacent elements in the array and swap the positions if they are not in the intened order;
//repeat the instruction as you atep through each element in the array;
//once you step through the whole array with no swap , the array is sorted;
//[-6,3,4,1,2,6]
//[-6,3,4,1,2,6]=>[-6,3,1,4,2,6]swap since 4>1;
//[-6,3,1,4,2,6]=>[-6,3,1,2,4,6]swap since 4>2;
//[-6,3,1,2,4,6]=>[-6,1,3,2,4,6]swap since 3>1;
//[-6,1,3,2,4,6]=>[-6,1,2,3,4,6]swap since 3>2;
//array is sorted;

//bubble sort problem:

function bubbleSort(array) {
  let swaped;
  do {
    swaped = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);
  return array;
}

//this bubble sort algorithm has two loop; so the time complexity of this algorithm is => O(n^2);

//Insertion sort:

// Virtually split the array into a sorted and an unsorted part.
//Assume that the first element is already sorted and remaining elements are unsorted .
//select an unsorted element and compare with all elements in the sorted part.
//if the elements in the sorted part is smaller than the selected element,procced to the next element in the unsorted part.Else ,shift larger elements in the sorted part towards the right.

//Insert the selected elements at the right Index.
//repeat till all the unsorted elements are placed in the right order.

//Insertion sort sproblem solve:
//problem:implement the Insertion sort:

//solution:

function InsertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    let numberToInsert = array[i]; //[9,7,6,9,4,5]=>i=3; j=0;j=4;
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j]; //j=1===3; j=4;
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
}

//implement insertion sort in decending order:
function insertion(array) {
  for (var i = 1; i < array.length; i++) {
    let insertion = array[i];
    let push = i - 1;
    while (push >= 0 && array[push] < insertion) {
      array[push + 1] = array[push]; //[3,2,12,32,2,3]push=0; push+1=array[1]=3//
      push = push - 1;
    }
    array[push + 1] = insertion;
  }
  return array;
}


//bubble-sort implement with uniqe value:
function bubblesort(array) {
  let switched;
  do {
    switched = false;
    for (var i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        switched = true;
      }
    }
  } while (switched);
  let narray = array.filter((arr, index) => array.indexOf(arr) === index);
  return narray;
}


//all in constractor function:
function Myfunction(array) {
  this.myarray = array;

  this.uniqevalue = function (myarray) {
    return myarray.filter((arr, index) => myarray.indexOf(arr) === index);
  };
  this.bubblesort=function(array){
    let switched;
    do {
      switched = false;
      for (var i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
          let temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          switched = true;
        }
      }
    } while (switched);
    return array;
  }

  this.insertionSort=function(array){
    for(var i=1; i<array.length; i++){
      let insert=array[i];
      let priveous= i-1;

      while(priveous>=0 && array[priveous]>insert){
        array[priveous+1]=array[priveous];
        priveous=priveous-1;
      }
      array[priveous+1] = insert;
    }
    return array;
  };

  this.quickSort=function(array){
      if (array.length < 2) {
        return array;
      }
      let pivot = array[array.length - 1];

      let left = [];
      let right = [];
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
          //52,26,7,32,3,21,3,1,123,3=>pivot=9;
          left.push(array[i]); //52>9=left=[7,3,3,1,3]=>[3,3,1,3],[7]
        } else {
          right.push(array[i]); //right=[52,26,32,21,123]
        }
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
  }
  this.merge=function(left,right){
    let sortedArray=[];
    while(left.length && right.length){
      if(left[0]<right[0]){
        sortedArray.push(left.shift())
      }else{
        sortedArray.push(right.shift())
      }
    }
    return [...sortedArray,...left,...right];
  }

  this.mergeSort=function(array){
    if(array.length<2){
      return array;
    }
    let mid=Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right= array.slice(mid);
   return this.merge(this.mergeSort(left),this.mergeSort(right));
  }
}
let err = [
  23, 2, 1,
];
let newf1 = new Myfunction(err);
console.log(newf1.mergeSort(err));


//insertion:



//Quick sort:
//given an array of integer ,sort the array:
//quick sort idea:

// identify the pivot element in the array:
//pick last element as pivot;
//pick a random element as pivot;
//pick median as pivot;

//put everything thats smaller than the pivot into a 'left' array and everything that's greater than the pivot into 'right' array
// repeat the proccess for the individual 'left' and 'right' array of the length 1 which is sorted by defination;

//repeatedly concatenate the left array , pivot and right array till one sorted array remains;


function quickSort(array){
  if(array.length<2){
    return array;
  }
  let pivot = array[array.length - 1];
  
  let left =[];
  let right =[];
  for(var i=0; i<array.length-1;i++){
    if (array[i] <pivot) {
      //52,26,7,32,3,21,3,1,123,3=>pivot=9;
      left.push(array[i]); //52>9=left=[7,3,3,1,3]=>[3,3,1,3],[7]
    } else {
      right.push(array[i]); //right=[52,26,32,21,123]
    }
  }
return [...quickSort(left),pivot,...quickSort(right)]
}


//the worst time complexity of this algorithm is : O(n^2);

//the average time complexity of this algorithm is : O(nlog n)