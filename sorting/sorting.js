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

function InsertionSort(array){
  for(var i=1; i<array.length; i++){
    let numberToInsert= array[i]; //[9,7,6,9,4,5]=>i=3; j=0;j=4;
    let j= i-1;
    while(j>=0 && array[j] > numberToInsert){
      array[j+1] = array[j]//j=1===3; j=4;
      j=j-1;
    }
    array[j+1] = numberToInsert
  }
  return array
}

console.log(InsertionSort([4,3,5,1,23,4,65,32,4,5,3,2,2,34,534]));
