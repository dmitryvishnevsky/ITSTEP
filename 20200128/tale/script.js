let a = prompt("Enter your string");
let b = prompt("Enter your symbol");
const vowel = /[уеыаоэяию]/gi;
console.log(a.replace(vowel, b));