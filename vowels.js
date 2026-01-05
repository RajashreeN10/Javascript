//Write a function that counts vowels in a string. (Hint: Use regex or loop through characters)
function vowels(str){
    let match=str.match(/[aeiouAEIOU]/g);
    return match ? match.length:0;
}
console.log(vowels("hello"))