//Write a program using setInterval to print numbers 1 to 5 every second. (Hint: Use counter with clearInterval())
let counter=1
let IntervalId=setInterval(function(){
    console.log(counter);
    if(counter==5){
        clearInterval(IntervalId);
    }
    counter++
},1000)