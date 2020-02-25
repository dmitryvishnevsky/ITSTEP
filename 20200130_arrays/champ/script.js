let marks = [];
let place = "";
for(let i = 0; i < 10; i++){
     marks[i] = parseInt(prompt("Enter the mark"));
}   
for(let j = 0; j < 3; j++){
    place += marks.indexOf(Math.max.apply(null, marks)) + " : " + Math.max.apply(null, marks) + " points  ";
    marks[marks.indexOf(Math.max.apply(null, marks))] = 0;
}
console.log(`The winners are: ${place.slice(0, place.length - 2)}`);
