/**
 *  -   NodeJS is the runtime environment for running JS code.
 * 
 *          JavaScript in Browser           |       JavaScript in NodeJS
 *      --------------------------------------------------------------------------
 *  1.  Browsers download the code from     |   Loaded from local files
 *      browsers                            |
 *  2.  Browsers treats the code as         |   trusted & highly privileged
 *      untrusted & highly resticted        |   
 *  3.  Limited blast radius - one use at a |   May lead to server compromise
 *      time
 * 
 *  JavaScript Pitfalls:
 *  ===================
 *  1.  Dynamic Type System:
 *      -   Abusing conversions and comparisons
 *      -   Automatic Conversion : may lead to unexpected code to be executed.
 *          -   "use strict" should be used.
 *      -   Loose Comparisons(==) : security checks may be bypassed.
 *          -   Use === instead
 *          -   Consider using Object.is();
 *  2.  Dynamic Code Execution:
 *      -   Interpreting untrusted data as code
 *      -   UnSafe functions
 *      -   Impact of remote code execution
 *          -   Denial of Service
 *          -   Server takeover
 *      -   Safe coding patterns
 *  3.  Prototypical Inheritance:
 *      -   Modifying behaviour of child objects
 *      -   Denial of Service
 *      -   for/in loop manipulation
 *      -   Peroperty Injection:
 *          -   Security check bypass
 *          -   SQL and NOSQL injections
 *      -   Remote Code Execution
 *      -   Can be minimized :
 *          -   Validate JSON schema
 *          -   Freeze the prototype 
 *                  Object.freeze()
 *          -   Create objects without prototype
 *                  Object.create(null, ...)
 *          -   Use map instead of {}
 * 
 *  Secutity testing techniques:
 *  -   SAST (Static application security testing) : source code analysis
 *  -   DAST (Dynamic application security testing) ; over the network
 *  -   IAST (Interactive application security testing) ; cobination of above both
 */

// Code Injection through Math.js
const math = require('mathjs');         //  Vulnerable library
math.eval('(1+) * 2');                  //  Arithmetic expressions
math.eval('sqrt(-4)');                  //  Access to functions
math.eval('sqrt.constructor("return process.env")()');

// Prototype Pollution
const user = {name : 'Tarun Verma'};        //  Regular user
const malicious  =  {isAdmin : true};       //  isAdmin true for administrators only
user['__proto__'] = malicious;              //  Pollution
console.log(user.isAdmin);                  //  true. Escalation of privilege

// prevent prototype pollution - add in the app.js
const proto = Object.prototype;
Object.freeze(proto);