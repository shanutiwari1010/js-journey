// for of loop --> used on objects
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(greet)

}

// MAPS --> have unique values onlys and ordered 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)

for (const [key,value] of map) {
    console.log(key , ':' , value)
}