/**
 *  Data Collection:
 *  -   Stores and structures large amount of data types for easy access.
 *      Provides methods to access that data.
 *      Ex : Set, WeakSet, Map, WeakMap.
 * 
 *  Set:
 *  -   Enables you to store unique values of any type where primitive or object.
 *  -   methods:
 *          add, clear, delete, entries, foreach, has, keys, values
 *  
 *  WeakSet:
 *  -   Only contains Objects not primitive types
 *  -   Objects are help weakly
 *  -   Not Iterable
 *  -   No access to size property
 *  -   Garbage Collected
 *  -   methods:
 *          add, delete , has
 * 
 *  Map:
 *  -   Key Value pair and keeps the original insertion order of the keys.
 *  -   Any type can be used for key or value whether primitive or object.
 *  -   methods:
 *          clear, delete, entries, foreach, get, set, has, keys, values
 * 
 *  Why Map over Object?
 *  --------------------
 *  -   key must be simpler data type in Object while it can be anything in map 
 *      like Object, Array , Function etc.
 *  -   Order is maintained in map while not in Object
 *  -   Map is inherited from Object so most properties are available to map as well.
 * 
 *  WeakMap:
 *  -   Key must be Object.
 *  -   Objects are help weakly.
 *  -   Not iterable, 
 *  -   Garbage Collected
 *  -   WeakMap are not enumerable.
 *  -   method:
 *          delete , get , set , has
 * 
 *  Types Arrays:
 *  -   Array-like objects that provide a mechanism for accessing raw binary data.
 *  -   Faster performance.
 *  -   Strictly controlled data.
 *  -   APIs that support Typed Arrays : Web Sockets, File APIs , XMLHttpRequests etc.
 *  -   Suppose we have an array buffer of 16 bytes:
 *      -   UInt8Array : can store 16 elements since it takes 8 bits/ 1 byte to store
 *      -   UInt16Array : can store 8 elements since it takes 16 bits/ 2 byte to store
 *      -   UInt32Array : can store 4 elements since it takes 32 bits/ 4 byte to store
 *      -   Float64Array : can store 2 elements since it takes 64 bits/ 8 byte to store
 */

// Set
console.log("\n \n\ \nSet : ")
const s1 = new Set();
s1.add(12);
s1.add('iidj');
s1.add('a');                        // add
s1.add('b');
s1.add({
    name : 'Tarun'
});
console.log(s1);
console.log("Size : " + s1.size);  // size
s1.delete('b');                     // delete
s1.delete('hf');
console.log(s1);

for(let i of s1){           // iteratiing - for/of
    console.log('value : ' + i);
}

// WeakSets
console.log("\n \n\ \nWeakSet : ")
const s2 = new WeakSet();

let obj1 = {key1 : 's'};
s2.add(obj1); // add
// s2.add(1);          // error since it is primitive

console.log(s2.has(obj1));
s2.delete(obj1);        // delete
console.log(s2.has(obj1));


// Maps
console.log("\n \n\ \nMap : ")
const m1 = new Map();
m1.set('key1', 'value1');  // add elements to map 
m1.set('key2', 'value2');
m1.set('key3', 'value3');
m1.set('key1', 'value4');
console.log(m1);

console.log(m1.get('key3'));        // get value 
console.log(m1.size);               // map size

m1.delete('key2');                  // delete from map
console.log(m1);

let keyArr = m1.keys();             // keys from map
console.log(keyArr);

let entryArr = m1.entries();        // entries from map
console.log(entryArr);

for(let entry of m1.entries()){     // iterating using for/of
    console.log(entry);
}
Array.from(entryArr).forEach((entry) => console.log(entry));  // iterating using foreach


// WeakMaps
console.log("\n \n\ \nWeakMap : ")
const m2 = new WeakMap();
// m2.set('key4', 'value4'); // Invalid value since only Objects can be added
let key4 = { key : 'tarun'};
m2.set(key4 , 'value5');        //add element
console.log(m2);        
console.log(m2.has(key4));      // find if object is present
m2.delete(key4);            // delete
console.log(m2.has(key4));


// Typed Array
console.log("\n \n\ \nTyped Array : ")
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

let view1 = new Int8Array(buffer);
view1[0] = 32;
view1[5] = -260; // will be saved as %256 because of range
console.log(view1);

let view2 = new DataView(buffer);
view2.setInt8(2, 67);
console.log(view2);
console.log(view1);     // view2 is also updating the same buffer.