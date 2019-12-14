let age = prompt("Enter your age");
let answ ="";
if(age >=0 && age <= 2) {
answ ="You are a baby";
}
if(age >=12 && age <=18) {
 answ ="You are a teenager";
 }
 if(age>=18&&age<=60) {
  answ ="You are adult";
  }
if(age>=61) {
answ ="You are a pensioner";
}
alert(answ);