const arr = [0, 1, 2, 3, 4, 5];

// /console.log(arr[0]);

//ARRAY METHODS
arr.push(6);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(9);  //insert element at the begining
// console.log(arr);

arr.shift()
// console.log(arr); //remove element at the begining

console.log ("A : " , arr)

const arr1 = arr.slice(1,3) 
console.log(arr1)
console.log ("B : " , arr)

const arr2 = arr.splice(1,3)
console.log(arr2)
console.log ("C : " , arr) // manipulate original array




/*

SHALOW COPY : it is a copy which shares the same reference
DEEP COPY : it is a copy which DO NOT shares the same reference


*/
