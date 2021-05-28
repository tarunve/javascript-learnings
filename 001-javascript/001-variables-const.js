/**
 * 
 *  Variables:
 *  =========
 *  -   Name given to the data ia called variable.
 *          var a = 10.9;
 *          let a = 10.9;
 *      let has block scope but var doesn't have it.
 *  -   Valid var names : 
 *          Start with one of : _  $ letter
 *          Followed by zero or more : _ $ letter number
 *  
 *  Difference between let and var:
 *  ------------------------------
 *  -   Using var, we don't get error even if the variable is declared after the usage.
 *      We get undefined as the output.
 *  -   Using let, we get eror if variable is not yet declared.
 * 
 *  Constant:
 *  ========
 *  -   whose value can't be changed 
 *          const a = 10;
 */

let var1 = 10.9;        // number
let product = 'Shoe';   // string
let abc = true;         // boolean

console.log(t1);
var t1 = 738;

let var4 = 49.99, var2 = "var2" , var3 = false;     // multiple vars lined up

const c1 = 378;
// c1 = 387; // run time error since it is const
// const c2; // run timw error since it need to be initialized


console.log(var2);