/**
 *  Prototype:
 *  -   Prototype is an object that exists in every function in JavaScript. 
 *  -   If some API functionality is to be enhanced without changing the 
 *      existing functionality, we can add properties/functions to prototype
 *      of any object.
 * 
 * Function's Protype:
 *  -   It is the object instance that will become the prototype for all objects
 *      created using this function as a constructor.
 *  -   First , it is checked that if object has that called prooerty . If not, it
 *      will look into prototype for that property.
 *  
 *  Object's Protype:
 *  -   It is the object instance from which the object is inherited.
 *  -   __proto__ is the pointer to the prototype of the object.
 *  
 */
'use strict';

// function prototype
(function(){
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 19;
    console.log(Person.prototype);

    let jim = new Person('Jim', 'Chopra');
    let sofia = new Person('Sofia', 'Chawla');
    console.log(jim.__proto__); // Since it is instance of Person so same prototype will be available 
    //jim.age = 16;
    console.log(jim.hasOwnProperty('age'));
    console.log(sofia.__proto__.age); // value from prototype
    console.log(jim.age);   // value from prototype since above line is commented to add jim.age
    console.log(jim.hdhid);  // undefined

    // prototype chain - after Object class , we will get null prototype.
    console.log(sofia.__proto__.__proto__.__proto__);

})();

// Inheritance 
(function(){
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    function Student(firstName, lastName){
        Person.call(this, firstName, lastName);
        this._enrolledCourses = [];
        this.enroll = function (courseId){
            this._enrolledCourses.push(courseId);
        };
        this.getCourses = function(){
            return this.firstName + "'s enrolled courses are : " + this._enrolledCourses.join(', ');
        };
    }

    // console.log(Student.prototype.constructor);
    Student.prototype = Object.create(Person.prototype);
    // console.log(Student.prototype.constructor);
    Student.prototype.constructor = Student;
    // console.log(Student.prototype.constructor);

    let tarun = new Student('Tarun', 'Verma');
    tarun.enroll("Math");
    tarun.enroll("Data Structure");

    console.log(tarun);
    console.log(tarun.__proto__);
    console.log(tarun.__proto__.__proto__);

})();