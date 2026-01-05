//Convert JSON string '{"id":101,"name":"Raj"}' into a JavaScript object. (Hint: Use JSON.parse())
let Json = '{"id":101,"name":"Raj"}'
let obj=JSON.parse(Json)
console.log(obj.id)
console.log(obj.name)