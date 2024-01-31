const codiing = ["js", "ruby", "java", "python", "cpp"];
 

// codiing.forEach( (item) => {
//     console.log(item)
// }  )


// function printMe(item){
//     console.log(item)
// }

// codiing.forEach(printMe)

// codiing.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
 })