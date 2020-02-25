let a = Number(prompt("Enter your number"));
let b = 0;
function perfect(){
    for(let i = 1; i < a; i++){
        if(a % i == 0){
             b += i; 
        }
    }
    if(a == b){
        alert("Your number is perfect");
    }
    else{
        alert("Your number is not perfect");
    }
}
perfect(a);


/*Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.*/