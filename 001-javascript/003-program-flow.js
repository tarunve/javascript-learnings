/**
 *  Truthy ans Falsy in conditions:
 *  ------------------------------
 *  -   Falsy :
 *      -   boolean : false 
 *          number  : 0
 *          string  : "" or '' or null or undefined or NaN
 *  -   Truthy :
 *      -   Everything not falsy is truthy
 *      -   boolean : true
 *          number : 0.5 or "0"
 * 
 *  diff between === and ==
 *  -----------------------
 *  -   === is called as strictly equals . 
 *      which means javascript check for the types as well.
 *          1 === "1"  : will evaluate to false.
 *  -   With == , javascript will try to convert the type. 
 *      here 1 will be converted to string "1"
 *          1 == "1"  : will evaluate to true
 * 
 *  diff between === and Object.is()
 *  --------------------------------
 *  -   string comparison in both.
 *  -   NaN compare to NaN - false in === and true in Object.is()
 *  -   Object.is() is more verbose while === is concise & convenient.
 *  -   +0 and -0 : equal in === but not equal in Object.is()
 */         

// Conditional using if()
if(5 === 5){ 
    console.log("yes");
}
var s1 = 'FL';
if(s1 !== 'AR'){
    console.log("Not Florida");
}

// Truthy and Falsy 
// + sign is simple way to convert the string to a number
if(+(1.1 + 1.2).toFixed(2) === 2.3){
    console.log("Truthy");
}

// if - else
var s2 = 'FL';
if(s2 === 'AR'){
    console.log("inside if");
} else if(s2 === 'NY'){
    console.log("inside else if");
} else {
    console.log("inside else");
}

// (=== or !==) and (== or !=)
if(1 === "1") console.log("=== : true");  // will not be printed
if(1 !== "1") console.log("=== : false"); // will be printed
if(1 == "1") console.log("== : true");    // will be printed
if(1 != "1") console.log("=== : true");  // will not be printed

// ternary operator
var price = 20;
(price < 10) ? console.log("yes") : console.log("No");
var res = (price < 30) ? 'yes' : 'No';
console.log(res);

//switch  - it does a strict comarison i.e. type and value must match else it will go to default
let productId = 2;
switch(productId){
    case 1:
        console.log("Product 1");
        break;
    case 3: // Multiple cases
    case 2:
        console.log("Product 2");
        break;
    default:
        console.log("Product undefined");
        break;
}

// for loop
for(let i=0; i<5; i++){
    console.log(i);
}

// for/in loop - used for iterating over elements in an object
const p1 = {
    firstName : 'Tarun',
    age : 28
}
for(const p in p1){
    console.log("Key=" + p + " , Value=" + p1[p]);
}

// for/of loop - used of iterating over iterable objects like Arrays
const pArr = [
    {
        firstName : 'Tarun',
        age : 28
    },
    {
        firstName : 'Deepak',
        age : 27
    }
]
for(const p of pArr){
    console.log(JSON.stringify(p));
}

// while loop
let i = 4;
while(i > 0){
    console.log(i);
    i--;
}

// do while loop
let count = 1;
do{
    console.log(count);
    count++;
} while(count <= 5);
