//Search Algorithm:

//this section is pretty small,just beacause we only focus two algorithm:
//1.Linear search,
//2.Binary search,
//3.Recursive Binary search(optional);

//1.linear search:
//problem1: giver an array of "n" element's and a target element "t", find the index of "t" in the array.return -1 if the element is not found;

//solution:

function linearsearch(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
//the time complexity of this algorithm is : Linear== O(n);

//Binary search:

//given an sorted array of "n" elements and a target elements "t" ,find the index of "t" in the array . return -1 if the target element is not found.

//binary search worked on only sorted array;
//if you dont have  sorted array then go for linear search; or sort the array first then implement the binary search;

//solution:
//binary search pseudocode:
/*
1.if the array is empty , return -1 as the element can not be found;
2.if the array has elements,find the middle element in the array. if target is equal to the middle element,return the middle element index;
3.if target is less than the middle element ,binary search left half of the array;
4.if target is greater than middle element,binary search right half of the array;
*/

function binarySearch(array, target) {
  let left = 0;
  let rigth = array.length - 1;

  while (left <= rigth) {
    let middle = Math.floor((left + rigth) / 2);

    if (target === array[middle]) {
      return middle;
    } else if (target < array[middle]) {
      rigth = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

//in every iteration we reduce our array length to half;
//so the complexity of this algorithm is O(log n);

//Recursive binary search:
//problem: given a sorted array of "n" element's and a target element "t" , find the index of " t" in the array.return -1 if the target element is not found;

//array=[5,1,3,2,5,4,2],t=5//output=4;
//array=[5,1,3,2,5,4,2],t=3/output=2;

//solve it with recursive :

function recursiveArray(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === array[middleIndex]) {
    return middleIndex;
  }
  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

//time complexity of this recursive binary search algorithm is O(log n);
//beacuse  every time its reduce half of it's length;
