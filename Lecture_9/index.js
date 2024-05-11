// error solving
/*(1) Syntax Errors:-
    -> These occur when the code is not written correctly according to the rules of the JavaScript language.
    -> Syntax Error: Missing closing parenthesis
 */
// console.log("Hello, world";
// console.log("Hello, world");

/*(2) Reference Errors:-
    -> These occur when you try to access a variable or function that doesn't exist.
    -> Reference Error: Variable 'x' is not defined
*/
// console.log(x);

/*(3) Type Errors:-
    -> These occur when an operation is performed on a value of the wrong type.
    -> Type Error: Cannot read property 'toUpperCase' of undefined
    */
// let str = "Ishu";
// console.log(str.toUpperCase());

/*(4) Logic Errors:- 
    -> These occur when the code doesn't do what you intended it to do, but there's no error message to indicate a problem. 
        These can be the trickiest to find because they don't necessarily result in an error message.
    -> Logic Error: Incorrect variable used
        let x = 5;
        let y = 10;
        console.log(x + y); // should be x * y to get the correct result
*/