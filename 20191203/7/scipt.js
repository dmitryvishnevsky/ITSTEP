let hours = prompt("Введите часы");
let minutes =prompt("Введите минуты");
const midHours =24;
const midMinutes= 60;
let hoursLeft = 23 - hours;
let minutesLeft = 60 - minutes; 
if (minutesLeft == 60) {
    hoursLeft++; 
    minutesLeft = 0;
}
alert ("Осталось " + hoursLeft + " часов" + minutesLeft + " минут");
