function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("a");
  console.log("n");
  console.log("u");
}

sayMyName(); //function calling (execution)
sayMyName; // reference of function

function addTwoNumbers(a, b) {
  console.log(a + b);
}

addTwoNumbers(5,8);


function calculateCartPrice(...num1){ //... is a rest operator which gives a array
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user ={
  userName : "shanu",
  age : 20
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and age is ${anyobject.age}`)
}

handleObject(user)

const arr = [199,299,399];

function callArr (getarray){
   return getarray[2]
}

console.log(callArr(arr))