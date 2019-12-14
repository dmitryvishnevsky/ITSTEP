let number = Number(prompt("Enter lesson number (1-10)"));
const dur = 45;
let breakTime = 0;
if (number>= 0 && number <=10) {
    if(number % 2 == 0 && number != 2) {
        breakTime = (number-2)/2*20+5;
    }
     else if (number % 2 != 0 && number != 1) {
        breakTime = (number-1)/2*20;
    }
    else if (number == 2) {
        breakTime = 5;
    }
    else if (number ==1) {
        breakTime = 0;
    }
 let endHours = Math.floor((number * dur + 540 + breakTime)/60);
 let endMinutes = (number*dur+540 + breakTime)%60;
 alert(endHours + ":" + endMinutes);
}
else {
    alert("Enter correct data");
}
       



