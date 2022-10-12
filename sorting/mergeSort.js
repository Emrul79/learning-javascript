//Merge Sort:
//given an array of integer , sort the array:
//sorting can eaither be accending or be decending:



//merge sort idea:
/*
1.divide the array into sub-array,each contaning only one element (An array with one element is considered sorted);
2.repeadly merge the sub-arrays to produce new sorted sub-arrays untill there is only one sub-array remaining.that will be the sorted array;
example: [-6,7,3,4,2,34]=>[-6,7,3]+[4,2,34]=>[-6] [7,3] + [4] [2,34]=>[-6],[7],[3],[4],[2],[3],[4]

*/
//merge sort solve:

function mergeSort(array){
    if(array.length<2){
        return array;
    }
    const mid= Math.floor(array.length/2);
    let leftArray= array.slice(0,mid);
    let rightArray= array.slice(mid);
    return merge(mergeSort(leftArray),mergeSort(rightArray))

}


function merge(left,right){
    const sortedArray=[];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

let myarray=[2134,4234,35,3,3,4532,23,2,42,2,-3,3,1,4,242];
console.log(mergeSort(myarray));