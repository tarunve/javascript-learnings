/**
 *  Object :
 *  ======
 *  -   Any real life object which has some properties and behavior;
 *      Ex: Person
 * 
 *  Standard Built-in objects:
 *  -   Array : collection on objects
 *  -   Date :
 *          new Date();
 * 
 *  this keyword
 *  ============
 *  -   If we are using in global scope. It refers to window object. 
 *  -   If we are using in function of any object literal , it refers to the 
 *      owner object itself.
 *      -   if we have used 'use strict' we will get error that 'this' is 
 *          undefined since this will refer to function only after strict.
 *  -   If we are using in event, refers to element that received  the event.
 *  -   call()/apply() methods refer to object passed in.
 */

let person = {
    name : "Tarun",
    age : 28,
    partTime : false
}
console.log(person.age);
person.age = 27;
person['age'] = 29;
console.log(person.name);
console.log(person.country); // undefined

// symbols - hide information
let mySymbol = Symbol();
let obj1 = {
    [mySymbol]: 'This is my private key',
    prop1: 29
}
console.log(obj1.mySymbol); // undefined since the
console.log(obj1.prop1);

// Object function
let obj2 = {
    name : "Tarun",
    age : function(){
        return 23;
    },
    showInfo : function(){
        console.log(this.name);
    }
}
obj2.showInfo();
console.log(typeof obj2.showInfo);

// Object assign 
let obj4 = {};
Object.assign(obj4, obj2);  // copy obj2 prop to obj4
let obj5 = {
    "prop1" : "value1"
}
let obj6 = Object.assign({},obj4,obj5); // Merging obj5 to obj4 which was earlier assigned from obj2
console.log("Object Assign :: " , obj6);

// Pass By reference
let obj3 = {
    name : "Tarun",
    age : 29
}
function incrementAge(p){
    p.age++;
}
incrementAge(obj3);
console.log(obj3.age);


// Buit-In objects : Date, Math, String, Number
let now = new Date();
console.log(now.toDateString());

console.log(Math.abs(-1883));
console.log(Math.round(373.84));
console.log(Math.floor(3733.2));
console.log(Math.sqrt(36));

let s1 = String("Tarun");
console.log(s1.charAt(1));

console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);


// this keyword
function callAndApply(){
    let product  = {
        "productId" : 680,
        "name" : "Beauty 1",
        "standardCost" : 1000,
        "listPrice" : 1431.56,
        grossProfit : function (){
            return (this.listPrice - this.standardCost).toLocaleString("en-US", {
                "style" : "currency",
                "currency" : "USD"
            });
        }
    };
    let prod2 = {
        "standardCost" : 500,
        "listPrice" : 850
    }
    console.log(product.grossProfit.call(product)); // this will refer to product
    console.log(product.grossProfit.call(prod2));   // this will refer to prod2
    console.log("");
    console.log(product.grossProfit.apply(product));
    console.log(product.grossProfit.apply(prod2));
}
callAndApply();


// constructor function - we need to use new keywork to call this function
function Product(id, name , cost, price) {
    this.productId = id;
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.grossProfit = function (){
        return (this.listPrice - this.standardCost).toLocaleString("en-US", {
            "style" : "currency",
            "currency" : "USD"
        });
    }
};
function constructorFunction(){
    let prod1 = new Product(680, "Product 1", 100, 300); // this refers to prod1
    let prod2 = new Product(380, "Product 2", 200, 500); // this refers to prod2
    console.log(prod1.grossProfit());
    console.log(prod2.grossProfit());
}
constructorFunction();


// Object Create Function - self calling function
(function (){
    let person1 = {
        first : "value1",
        second : "value2"
    }
    let person2 = Object.create(
        Object.prototype,
        {
            first : {value: 'value3', enumerable: true, writable: true, configurable: true},
            second : {value: 'value4', enumerable: true, writable: true, configurable: true}
        }
    )
    console.log(person1);
    console.log(person2);
})();

// Object Properties
(function (){
    let person1 = {
        first : "value1",
        second : "value2",
        fullName : "value1 value2"
    }
    // writeable property makes the object immutable when set to false.
    //Object.defineProperty(person1, 'first', {writable: false});
    //Object.freeze(person1, 'second');
    person1['first'] = 'Deepak';
    console.log(person1);

    // enumerable property makes the object non iteratable when set to false.
    //Object.defineProperty(person1, 'second', {enumerable: false});
    console.log(Object.keys(person1));
    console.log(JSON.stringify(person1));

    // configuratble property locks down a property from descriptor so that its
    // attributes even can't be changed
    Object.defineProperty(person1, 'second', {configurable: false});
    delete person1.second;
    console.log(JSON.stringify(person1));

    // Getter Property
    Object.defineProperty(person1, 'fullName', {
        get: function(){
            return this.first + ' ' + this.second;
        },
        set: function(value){
            var nameParts = value.split(' ');
            this.first = nameParts[0];
            this.second = nameParts[1];
        }
    });
    person1.fullName ="tarun verma";
    console.log(JSON.stringify(person1));
})();