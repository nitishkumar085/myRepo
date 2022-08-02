//normal function

function addition(num,num1)
{
    return num+num1;
}

console.log(addition(5,10))


//anonomous function

let add = function (num,num1)
{
    return num+num1;
}

console.log(add(5,10))

//arrow function

let ad = (num,num1) =>
{
    return num+num1;
}
console.log(ad(5,10))


let check=(num)=>
{
    if(num%2==0)
    {
        return "number is even"
    }

    else 
    {
        return "number is odd"
    }
}

console.log(check(23))



let btn = document.getElementById("btn")

let para = document.getElementById("p2")

btn.addEventListener("click",()=>{
    para.innerText = "hello world"
})