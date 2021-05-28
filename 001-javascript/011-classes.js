/**
 * 
 *  -   getters and setters live in the prototype. But other properties stay in
 *      object instance.
 *  -   To get the getter property , we need to define property to set 
 *      enumerable property to true. By default it is false.
 */

'use strict';
(function(){
    class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get fullName(){
            return this.firstName + " " + this.lastName;
        }
        set fullName(fullName){
            var name = fullName.split(' ');
            this.firstName = name[0];
            this.lastName = name[1];
        }

        isAdult(){
            return this.age > 18;
        }
    }
    console.log(Person.prototype);
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});
    let tarun = new Person('Tarun', 'Verma', 29);
    console.log(tarun);
    
    console.log(tarun.fullName);
    tarun.fullName = 'Deepak Kumar';
    console.log(tarun);
    console.log(tarun.isAdult());
})();


// Inheritance
(function(){
    class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get fullName(){
            return this.firstName + " " + this.lastName;
        }
        set fullName(fullName){
            var name = fullName.split(' ');
            this.firstName = name[0];
            this.lastName = name[1];
        }

        isAdult(){
            return this.age > 18;
        }
    }
    class Student extends Person{
        constructor(firstName, lastName, age){
            super(firstName, lastName, age);
            this.enrolledCourses = [];
        }
        enroll(courseId){
            this.enrolledCourses.push(courseId);
        }
        getCourses(){
            return this.fullName + "'s courses are : " + this.enrolledCourses.join(', ');
        }
    }

    let tarun = new Student('Tarun', 'Verma', 27);
    tarun.enroll("Math");
    tarun.enroll("Physics");
    console.log(tarun);
})();

// static - class level properties/functions
(function() {
    class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        static staticAge = 40;
        static fromPerson(person){
            return new Person(person.firstName, person.lastName, person.age);
        }
        isAdult(){
            return this.age > 18;
        }
    }
    let tarun = new Person('Tarun', 'Verma', 27);
    console.log(Person.fromPerson(tarun).isAdult());
    console.log(Person.staticAge);
})();