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