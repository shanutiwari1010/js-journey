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


**********  PRIMITIVE  ***********
-> 7 types : string, number, boolean, null , undefined, symbol, Bigint
-> uses stack memory
-> in stack copy of variable is created

-> Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined




**********  NON PRIMITIVE ***********
-> Arrays , Objects, functions
-> heap memory is used 
-> reference of variable(object) is used

-> Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)



----JS is Dynamically typed language--



*/
