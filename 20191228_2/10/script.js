let h1 = Number(prompt("Enter the number of hours"));
let m1 = Number(prompt("Enter the number of minutes"));
let s1 = Number(prompt("Enter the number of seconds"));
let h2 = Number(prompt("Enter the number of hours")); 
let m2 = Number(prompt("Enter the number of minutes"));
let s2 = Number(prompt("Enter the number of seconds"));
let t = 0;
function total(h, m, s){
    t = h * 3600 + m * 60 + s;
    return t;
}
function calc(h, m, s){
    let hours = Math.floor(total(h, m, s) / 60 / 60);
    let minutes = Math.floor(m / 60) - (h * 60);
    let seconds = total(h, m, s) % 60;
    console.log(hours + ":" + minutes + ":" + seconds);
       }
if(total(h1, m1, s1) > total(h2, m2, s2)){
    console.log(calc(h1, m1, s1));
}
else{
    console.log(calc(h2, m2, s2));
} 
/*Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс». */