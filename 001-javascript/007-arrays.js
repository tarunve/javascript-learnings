/**
 *  Arrays:
 *  -   Collection of elements.
 * 
 *  Methods : 
 *  1.  push(var) : insert in the end 
 *  2.  unshift(var) : insert in start
 *  3.  pop()   : remove from the end
 *  4.  shift() : remove from the start
 *  5.  slice(startIndex , endIndex) :  
 *      -   create new subarray using index (startIndex is inclusive, endIndex is exclusive)
 *  6.  splice(startIndex , numItemsToDelete) : 
 *      -   delete elements within the array  
 *      splice(startIndex , numItemsToDelete, valueToBeInserted) : 
 *      -   can be used for inserting the element within the array. 
 */

// create and initialize an array
let values = ['a', 'b', 'c'];
console.log(values);
console.log(Array.isArray(values));

values = Array.of(1,2 ,3);
console.log(values);

// access array items
console.log(values[1]);
console.log(values[22]); // undefined

// Array methods - manipulation
let arr = ['a', 'b', 'c'];
arr.push('e');
arr.push('f', 'e');                 // add in the end
console.log(arr);

const addInStart = arr.unshift(23);  // add in start
console.log(arr);

const last = arr.pop();             // remove the last
console.log(last);
console.log(arr);

const first = arr.shift();          // remove the first
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f'];
var newArr = arr.slice(1, 4);  // create subarray using indexes
console.log(arr);
console.log(newArr);

newArr = arr.splice(2, 2);  // delete/insert elements within array
console.log(arr);
console.log(newArr);
newArr = arr.splice(2, 0, 'hello');
console.log(arr);
console.log(newArr);
newArr = arr.splice(3, 1, 'hello');
console.log(arr);
console.log(newArr);

// Searching 
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.indexOf('c'));
console.log(arr.indexOf('i')); // -1 i.e. element not found

// filter
arr = ['a', 'b', 'ccc', 'd', 'e', 'f'];
const set = arr.filter(function (item) {
    console.log('item : ', item);
    return item > 'b';
});
console.log(set);

// find 
arr = ['a', 'b', 'ccc', 'd', 'e', 'f'];
const found = arr.find(function (item) {
    return item.length > 1;
});
console.log(found);

// fill method - initialize with some value
arr = Array.of('a', 'b', 'ccc', 'd', 'e', 'f');
arr.fill(1);
console.log('Fill : ' , arr);

// foreach
arr = ['a', 'b', 'ccc', 'd', 'e', 'f'];
arr.forEach(function (item) {
    console.log(item);
});

//de-construct the array into variables
arr = ['a', 'b', 'ccc', 'd', 'e', 'f'];
var[r1, r2, r3, r4, r5, r6] = arr;
console.log(r1 , r2, r3, r4, r5, r6);

// spread operator - make a clone of array (shallow cloning i.e. new copy of primitive variables)
function copyPrimitiveLiteralsArray(){
    arr = ['a', 'b', 'ccc', 'd', 'e', 'f'];
    var a = [...arr];
    a[1] = 'bbb';       // will change only in the copied array since primitive 
    console.log(a);
    console.log(arr);
}
copyPrimitiveLiteralsArray();

var persons = [
    {
        "name" : 'Tarun',
        "age" : 12
    },
    {
        "name" : 'Deepak',
        "age" : 21
    }
];
function copyObjectArray(){
    let diff = [...persons];
    diff[0].name  = 'reena'; // will change the original object as objects are copied by reference
    console.log(persons[0].name);
    console.log(diff[0].name);
}
copyObjectArray();