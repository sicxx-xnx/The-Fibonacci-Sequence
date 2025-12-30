function InitFibFunction (usernumber) {
const outputArray = []    
for (let index = 0; index < usernumber; index++) {
if (outputArray.length < 1) {
const fib =  outputArray[index - 2] + outputArray[index - 1] || 0   
outputArray.push(fib)   
} else {
const fib =  outputArray[index - 2] + outputArray[index - 1] || 1   
outputArray.push(fib)  
}      
}
console.log(outputArray)
}

function recursiveFibFunction(usernumber,outputArray=[],index=0){
      
if (usernumber == 0) {
console.log(outputArray)    
} else {
if (outputArray.length == 0) {
const fib =  outputArray[index - 2] + outputArray[index - 1] || 0   
outputArray.push(fib)
index++
recursiveFibFunction(usernumber-1,outputArray,index)   
} else {
const fib =  outputArray[index - 2] + outputArray[index - 1] || 1   
outputArray.push(fib)
index++
recursiveFibFunction(usernumber-1,outputArray,index)   
}    
}
}


function mergesort(arr) {
if (arr.length <= 1 ) {return arr} 


const indexTosplit = Math.floor(arr.length / 2)  
const left = mergesort(arr.slice(0, indexTosplit))
const right = mergesort(arr.slice(indexTosplit))    


return merge(left,right)
}

function merge(left,right,results = []) {
let i = 0
let j = 0    
while (i < left.length && j < right.length) {
if (left[i] < right[j]) {
  results.push(left[i]);
  i++;
} else {
  results.push(right[j]);
  j++;
}
} 
return results.concat(left.slice(i)).concat(right.slice(j));

}

InitFibFunction(20)
recursiveFibFunction(20)
console.log(mergesort([15,6,4,25,50]))