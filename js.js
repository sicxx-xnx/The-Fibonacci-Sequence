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

InitFibFunction(20)
recursiveFibFunction(20)