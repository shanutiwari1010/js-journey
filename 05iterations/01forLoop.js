// for(let i =0 ; i<=10 ; i++){
//     if(i==5){
//         console.log("5 is best number")
//     }
//  console.log(i)
// }

for(let i =1 ; i<=10 ; i++){
 console.log(i,"----------outer loop-----------")

    for(let j=1 ; j<=10 ; j++){
        console.log(`${i}*${j} = ${i*j}`)
    }
}