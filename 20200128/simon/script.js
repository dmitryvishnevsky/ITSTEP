let txt = prompt("Enter your text");
function countWords(txt){
    return txt.match(/[А-Яа-яЁ]{3,}/g).length;
}
console.log(countWords(txt));