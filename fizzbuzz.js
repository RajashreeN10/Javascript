// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         console.log("fizz",i)
//     }
//     else if(i%5==0){
//         console.log("buzz",i)
//     }
//     else {
//         console.log(i)
//     }
// }

let fizzCount = 0;
let buzzCount = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
    fizzCount++;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    buzzCount++;
  } else {
    console.log(i);
  }
}

console.log("Fizz count:", fizzCount);
console.log("Buzz count:", buzzCount);