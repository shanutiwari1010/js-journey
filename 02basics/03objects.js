/* 
there are two ways to declare objects 
1 -> literals
2 -> constructor

SINGLETON ==> if you are creating object using constructor then it is a singleton object (CREATE SINGLE INSTANCE OF OBJECT)
*/
const sym = Symbol("key1");

const user = {
  name: "Shanu",
  age: 20,
  location: "Indore",
  [sym]: "key1",
  email: "shanu@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mondays", "Saturday"],
};

// console.log(user.name);
// console.log(user["email"]);
// console.log(user[sym]);

// console.log(typeof (user[sym]));
// console.log(user)
 user.greeting = function (){
    console.log("hello from shanuu")
}

user.greetingTwo = function (){
    console.log(`hello from ${user.email}`)
}
console.log(user.greeting())
console.log(user.greetingTwo())
