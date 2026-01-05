//2	Write a function that returns the factorial of a number. (Hint: Use a loop or recursion)
function factorial(n){
    let result=1
    for (i=n;i>1;i--){
        result*=i;
    }
    return result
}
console.log(factorial(4))