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
InitFibFunction(20)