const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}

for (const key in myObject) {
    console.log(myObject[key])
}

const programming= ["js", 'rb','java']
for (const key in programming) {
    console.log(programming[key])
}