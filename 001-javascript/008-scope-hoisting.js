/**
 *  Global Scope:
 *  -   variables declared outside the function are visible inside as well.
 * 
 *  hoisting :
 *  -   when we declare variable/function after calling it.
 *      -   In case of variable, we get answer as - undefined.
 *      -   In case of function, it is not an issue since the function 
 *          call happens in 2 passes. In first pass, functions are identified
 *          and in the second pass, call is made.
 */

// global scope 
let productId = 12345;
function showProductId(){
    console.log(productId);
}
showProductId();

// global scope using const object
const app={
    productId : 1234
}
function showProductId2(){
    console.log(app.productId);
}
showProductId2();

// function scope 
function showProductId3(){
    let productId = 345;
    function fix(){
        let productId = 567;
        console.log('in fix : ' , productId);
    }
    fix();
    console.log('in showProductId3', productId);
}
showProductId3();

// var and hoisting
console.log(a1);
var a1=10;     // we will get undefined with var, ans error with let

fun1();       // hoisting is possible
function fun1(){
    console.log('Tarun is calling fun1');
}

// strict - we will strictly need to define the variable before use i.e. hoisting is not possible
function fun2(){
    'use strict';
    // abc1 = 1234; // error
    const abc1 = 1234;
    console.log(abc1);
}
fun2();