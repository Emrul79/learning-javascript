//here i will share big-o of obgect ,array and their methods.

// Object: Big-O=>
//An Object is a collection of key value pairs.
//if you Insert/remove something: Big-O= O(1);//constant.
//The metter how many properties exist in an object,it takes the same amout of time to insert or remove property.
//if you want to access a value with the key: The complexity is constant;O(1).

const person={
    firstName: 'Emrul',
    lastName: 'Biplob'
}
//if you want the value 'Biplob',you will write code like person.lastName;it doesn't depends on other property;
//if you want to search in an object for value, the complexity will be Linear:O(n).
//beacasue it will going throw the whole array.

/* Object.keys: whice returns the array of all the keys. So the complexity depends on n number of key.
the complexity will be Linear.O(n);*/
/* Object.values: whice returns the array of all the values. So the complexity depends on n number of values.
the complexity will be Linear.O(n);*/
// and Object.entries is also have the Linear time-Complexity.O(n);