let h = 0;
let m = 0;
let s = prompt("Enter the number of seconds");
function calcS(){
h = Math.floor(s / 3600);
m = Math.floor((s - h * 3600)/60);
s = s - h * 3600 - m * 60;
console.log(h + ":" + m + ":" + s);
}
calcS(s);
 /*Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс»*/