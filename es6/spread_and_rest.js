
// basic example of spread operator

let arr=["mongo","apple","banana","cherry"]
let newArr = [...arr]           //it will copy value of arr to newarr array
console.log(newArr)
let newAr = [arr]
console.log(newAr)

// to combine two array into one array

let fruits=["mongo","apple","banana","cherry"]
let newFruits=["guava","peach","pineapple"]
let allFruits=[...fruits,...newFruits]      //it will combine two array
console.log(allFruits)

//to use spread operator with functions

let fru=["mongo","apple","banana","cherry"]
funcFruits =(f1,f2) =>{
    console.log(`${f1},${f2}}`)
}
//in normal way , it will be funcFruits(fru[0],fru[1])
funcFruits(...fru)
//here we call function by passing spread operator with arry








// basic example of rest operator
// rest operator will gather elements in one place
restFruits = (...fru) =>{
    console.log(fru.length)
}
restFruits(...fru)


//
 collectfruits = () =>{

 }
collectfruits()