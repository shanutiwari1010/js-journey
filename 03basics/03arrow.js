//arrow functions is introduced in ES6
// this keyword is used to refer current contexxt
// arrow funtion does not have this keyword
// global object in brower is window
// global object in node is a empty object
// this can only used with objects
const user ={
    userName : "shanu",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.userName}, welcome to website`)
        // console.log(this)
    }

}
user.welcomeMessage()
// console.log(this)

// function chai(){
//     let user = "shanu tiwari"
//     console.log(this)
// }

const chai = ()=>{
    
    let user = "shanu tiwari"
    console.log(this.user)
}
chai()

const addTwo = () => ({user : "tiwari"})
console.log(addTwo())