/**
 *  Function:
 *  ========
 *  -   Function is a block of reusable code that is used to perform single/related action.
 *  -   Block of code which is given a name and can be executed using name.
 *  -   We can use it as declaration/definition or expression.
 *  -   If we don't pass any argument to the parameterized function, we get undefined.
 *  -   If we don't have return statement and we are getting soome value from function,
 *      we egt undefined.
 * 
 *  Arraow Functions : 
 *  -   simpler way to write a function expression
 *  -   introduced in ES6
 *  -   labda expressions.
 *  -   side effects :
 *      -   behavior of this keyword
 *      -   No arguments object
 */

// simple function - function declaration/definition
function fun1(){
    console.log('inside func1');
}
fun1();

// function expression
let myFun2 = function dubugFun2(){
    console.log("inside func2");
}
myFun2();
// debugFun2(); // error - debugFun2 is not defined.


// Passing arguments 
let myFun3 = function (message){
    console.log(message);
}
myFun3("Tarun is here");

// default parameter
function greet1(name='Tarun'){
    console.log('Hi, Mr. ' + name);
}
greet1();
greet1('Deepak');

// rest parameters
function greet2(...names){
    names.forEach(name => console.log('Hi, Mr. ' + name));
}
greet2('A', 'B', 'C', 'D','E');

// funtion returning values
let myFun4 = function (num){
    let n = num*23;
    return n; 
}
console.log(myFun4(23));

// nested function and scope
let key=42;
function getSecretCode(value){
    let keyGenerator = function(){
        // key scope is this function only
        let key = 12;
        console.log("inside keyGenerator : ", key);
        return key;
    }   
    let code = value*keyGenerator();
    return code;
}
let secretCode = getSecretCode(2);
console.log(secretCode);


// Arrow Function
function sum(num1, num2){
    return num1+num2;
}
let output = sum(10, 5);
console.log(output);

let add = (num1, num2) => num1+num2; // arrow function
console.log(add(10,5));

// this - arraw function
let message = {
    name : 'Tarun',
    regularFunction: function(){
        console.log(this);
        console.log('Hello' + this.name);
    },
    arrowFunction: () => console.log('Hi' + this.name) // undefined since this is not recignized
}
message.regularFunction();
//message.arrowFunction();

// call method - we can use this method to bind any object to a function
var person1 = {name : 'Tarun'};
var person2 = {name : 'Deepak'};
var sayHi = function(){
    console.log("Hi " + this.name);
}
sayHi.call(person1);
sayHi.call(person2);

// apply - takes the array as argument otherwise similar to call function
// Use apply method when input values are already in form of array and similar types
// Use call method when input values are not in form of array and different types
function introduction(name , profession){
    console.log('My name is ' + name + ' and I am a ' + profession);
    console.log(this);
}
introduction('Tarun', 'Software Professional');
introduction.apply(undefined, ['Tarun', 'Software Professional']);
introduction.call(undefined, 'Tarun', 'Software Professional');