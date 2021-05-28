/**
 *  Callback Pyramid of Doom:
 *  ------------------------
 *  -   A common problem that arises when a program uses many levels of nested
 *      indentation to control access to a function.
 *      Example : 
 *              a('test', (err, aResult)) => {
 *                  b(aResult, (err, bResult) => {
 *                      c(bResult, (err, cResult) => {
 *                          d(cResult)
 *                      }) 
 *                  })
 *              });
 *  -   It is kind of dirty code which changes of mistakes are more.
 *  -   handling errors becomes more complex.
 * 
 *  Promise:
 *  -   Object that represents the eventual completion(or failure) of
 *      an asynchronous operation, and its resulting value.
 *  -   Using it, we write more readable code.
 *  -   Promise States:
 *      -   Pending : that has not yet settled -> fulfilled or rejected.
 *      -   Fulfilled : when asynchrous call if finished successfully
 *              and we get object of result.
 *      -   Rejected :  returns the reason why call was rejected.
 *  -   Promises are not lazy.
 * 
 *  check project :- 002-javascript-async-promises
 */

let temp = new Promise();