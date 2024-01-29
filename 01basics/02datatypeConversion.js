let age = undefined;

// console.log(typeof age)

let valueInNumber = Number(age);
// console.log(parseInt(age))
// console.log(typeof parseInt(age))

console.log(typeof valueInNumber);
console.log(valueInNumber); //Nan (not a number)

console.log("8" + 2 + 4); //824
console.log(5 + 2 + "4"); //74

console.log("****************************");
console.log(null == 0); //false
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null >= 0); //true

/*----------------***********  NOTES-CONVERSION  ***********--------------
 "10" => 10
 "10abc" => NaN
"true" => 1; "false " => 0


**********  Primitive  ***********
7 types : string, number, boolean, null , undefined, symbol, Bigint

**********  NON Primitive ***********
Arrays , Objects, functions


----JS is Dynamically typed language--

*/
