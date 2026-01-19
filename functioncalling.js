var x = 1;
a();    // calls function a
b();    // calls function b
console.log(x);
function a(){
    var x=10   // local variable (function scope)
    console.log(x)   // prints 10
}
function b(){
    var x=20    // local variable (function scope)
    console.log(x)   // prints 20
}

//output
// 10
// 20
// 1

var x=1;
a();
b();
console.log(x);
function a(){
    x=10;  // no var → modifies global x
    console.log(x)
}
function b(){
    x=20;    // no var → modifies global x
    console.log(x)
}

//output 
// 10
// 20
// 20