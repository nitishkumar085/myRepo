// let arr = [[2, 4,5], [5, 8], [7, 9]] 
// let [num1,num2,num3] = arr
// // let arr2 =[...num1,...num2,...num3]
// // console.log(arr2)

// // let  arr = [['adam', 23], ['peter', 56], ['john', 80]]
// // const n = arr.length
// // let obj ={}

// // for(let i=0;i<n;i++)
// // {
// //       let 
// // }


// let arr = [1,5,7,3,9,1,0,3,9,5]
// for(let i =0;i<arr.length;i++)
// {
//     if(arr[i]<arr[i+1])
//     {
//         var b =arr[i+1]
//     }
//     else
//     {
        
//     }
// }
// let num = b;
// console.log(num)

// arr = (num) =>
// {
//         for(let i = 0;i<num.length;i++)
//         {
//             if(num[i]+num[i+1]==6)
//             {
//                 return sum[num[i],num[i+1]]
//             }
//         }
// }


// var arr = [3, 4, 5, 1, 7, 9]
// function findsum(arr,value)
//   {
//     var p = arr.length;
//     const newArr = []
//     for(i=0;i<p;i++)
//     {
//       for(j=1;j<p;j++)
//       {
//         if(arr[i]+arr[j]==value)
//         {
            
//             newArr.push(arr[i],arr[j])
//           return newArr;
//         }
//       }
      
//     }
    
//   }
 

//   console.log(findsum(arr,6))


let arr = [2, 2, 1, 1, 0, 2, 1, 0, 1]
sort = (num) =>
{
    var p = num.length;
        for(let i=0;i<p;i++)
        {
            for(let j=1;j<p;j++)
            {
                if(num[i]>num[j])
                {
                    num[i]=num[j]
                  console.log(num[0])
                }
                else
                {

                }
            }
           
        }
}

console.log(sort(arr))