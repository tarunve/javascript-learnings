
/**
 *  Iterable:
 *  -   An array is a built-in iterable.
 *  -   There are other built-in iterables like string , maps and sets.
 *  -   Iterables implements the @@iterator method
 *  -   Symbol.Iterator a well-known Symbol in JavaScript. It describe the 
 *      default iterator for an object. 
 *  -   for/of loop only works with iterable objects and should not be 
 *      confused with for/in loop
 *  -   for/of loop iterates over VALUES, for/in iterates over enumberable properties.
 */

// Array
const arr = [0,3,4,6];
const iter1 = arr[Symbol.iterator]();  // using the Symbol.Iterator
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());


// Map
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
const iter2 = map[Symbol.iterator]();
console.log(iter2.next().value);
console.log(iter2.next().value);

for(const[key, value] of map){      // using the Symbol.Iterator under the hood
    console.log(`${key} and ${value}`);
}


// Set
const set = new Set();
set.add('value3');
set.add('value4');
const iter3 = set[Symbol.iterator]();
console.log(iter3.next().value);
console.log(iter3.next().value);

for(let val of set){            // using the Symbol.Iterator under the hood
    console.log(val);   
}

// custom - iterator
function iterator(array) {  
    var currentIndex = -1;  
    return {  
        next: function() {  
            currentIndex = currentIndex + 1;  
            return currentIndex < array.length ? {  
                value: array[currentIndex],  
                done: false  
            } : {  
                value: "index out of range",  
                done: true  
            };  
        },  
        previous: function() {  
            currentIndex = currentIndex - 1;  
            return currentIndex >= 0 ? {  
                value: array[currentIndex],  
                done: false  
            } : {  
                value: "index out of range",  
                done: true  
            };  
        }  
    };  
} 
var a = [1, 2, 3, 4 ,5 ,6, 6];
var res = iterator(a);  
console.log(res);  
console.log(res.next().value);  
console.log(res.next().value);  
console.log(res.next().value);  
console.log(res.previous().value);  
console.log(res.previous().value);  
console.log(res.previous().value);  