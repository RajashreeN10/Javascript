//Merge two objects into one. (Hint: Use spread operator {...obj1, ...obj2})
const obj1={fruit:"apple",number:16}
const obj2={vegetable:"tomato",color:"red"}
const merge={...obj1,...obj2}
console.log(merge)