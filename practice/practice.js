let s =
  "hello hello emrul hassan biplob this hello hello emrul hassan biplob this biplob is emrul hassan biplob working in here gifgsa eoh78iug4 ugigwrqei uqwyetrity43 amader desher nam bangladesh biplob is emrul hassan biplob working in here";

// console.log(s.split(' '));

function convert(string) {
  let convering = string.split(" ");
  let conder = convering.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  return conder.join("  ");
}
function duplycate(string) {
  let dupli = string.split(" ");
  let arr = dupli.filter((str, index) => {
    //time complexity= O(n);

    return dupli.indexOf(str) === index; //time complexity= O(n);
  });
  let newarr = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)); //time complexity= O(n);

  return newarr.join(" ");
}

// console.log(duplycate(s));





//leetcode problem solving:

//two sum:

// Input: nums=[2,4,3,5,12,32], target=14;
//output=[1,4];

function twoSum(array,target){
  for (var i=0; i<array.length; i++){
    for(var j=1; j<array.length; j++){
      if(array[i]+array[j]===target){
        return [i,j]
      }
    }
  }
}
// console.log(twoSum([12, 5, 75, 4, 65, 3, 21, 1, 2], 67));
//time complexity of this algorithm is : O(n^2);
//space complexity of this algorithm is : O(1);

//we can do it with another way:
function myTwoSum(array,target){
  let memmory={};
  for (var i=0; i<array.length; i++){
    if(memmory[array[i]]===undefined){
      memmory[target-array[i]]=i;
    }else{
     
       console.log([i, memmory[array[i]]]);
    }
  }
}
myTwoSum([12, 5, 75, 4, 65, 3, 21, 1, 2], 67);
myTwoSum([12, 5, 75, 49, 65, 3, 21, 1, 2], 67);