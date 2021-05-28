/**
 *  Arithmetic Operator:
 *  --------------------
 *  -   below are the operators :
 *              + - * / %
 *              += -+ *= /= %=
 *              ++ --
 *  -   precedence is importance in mathematical equations using BODMAS.
 * 
 *  Primitive DataTypes:
 *  ===================
 *  1.  boolean         : true or false
 *  2.  null            : no value
 *  3.  undefined       : a variable declared, but has no value
 *  4.  number          : numeric value
 *  5.  string          : series(array) of characters
 * 
 *  Object Data Types
 *  =================
 *  1.  new Array       : a collection of values
 *  2.  new Error       : contains a name and error message
 *  3.  new Function    : a block of code
 *  4,  new Object      : a wrapper around any type
 *  5.  new RegExp      : a regular expression
 *  6.  new Boolean     : object that contains true or false
 *  7.  new Number      : object that contains a numeric value
 *  8.  new String      : object that contains a character(s)
 * 
 *  typeof operator
 *  ---------------
 *  -   returns the data type of the passed in expression
 *  -   string value is returned i.e. string , number etc.
 * 
 *  instanceof operator
 *  -------------------
 *  -   Test if inherits from Object (not a primitive). It return true or false.
 *      Ex :    obj1 instanceof Object
 * 
 *  String:
 *  ------
 *  -   We can use '' or "" to declare a string
 *  -   We can also use variable using backtick (`)
 *          var a = "name ${var1}"
 */

let p1 = 37.77;

// Arithmetic operator
p1 = p1 - 1; 
console.log(p1);
p1 = p1 + 2;
console.log(p1);
p1 = p1 * 3;
console.log(p1);
p1 = p1 / 3;
console.log(p1);
p1 = p1%3;
console.log(p1);

p1 += 4;
p1 -= 7;
p1 *= 5;
p1 /= 6;
p1 %= 3;

// increment/decrement operator 
p1--;
--p1;
p1++;
++p1;

// negative numbers
var a1 = 20 - (-2); 
console.log(a1);

// string 
var s1 = "Hello \"World\"";
console.log(s1);
var s2 = `I'm printing - ${s1}`;
console.log(s2);

// string.raw for special characters
var st = `Hello \n"World"`;
console.log(st);
var st = String.raw `Hello \b"World"`;
console.log(st);

// manipulation on string using methods
let msg = "Hello World";
msg = msg.substr(3);
console.log(msg);
console.log(typeof msg);
msg = msg.length;
console.log(typeof msg);

// covert string to number or vice versa
let amount = 2993;
amout = amount.toString();
console.log(amount);
console.log(typeof amount);

amount = Number.parseInt(amount);
console.log(amount);
console.log(typeof amount);

amount = Number.parseInt("38983hudh"); // while conversion, parsing happens till number
console.log(amount);

// boolean
let saved = true;
console.log(saved);
console.log(typeof saved);

// null and undefined
let c1;
console.log(c1);    // undefined var
c1 = null;
console.log(c1);    // assigned null value

// Objects And Symbols
//  When we want to hide variables in objects - we can use symbols.
let person = {
        firstName : "Tarun",
        age : 28
};
console.log(typeof person);
console.log(person.firstName);

var id = Symbol("My Id");
var id2 = Symbol("My Id");
console.log(id === id2);

var id3 = Symbol.for("My Id");
var id4 = Symbol.for("My Id");
console.log(id3 === id4);

var loan = {
        name : "Tarun",
        [Symbol("income")] : 15000
}
console.log(Object.getOwnPropertyNames(loan));
console.log(loan[Symbol.for("income")]);