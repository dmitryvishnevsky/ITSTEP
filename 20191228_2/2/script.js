let a = prompt("Enter your number");
let b = 1;
function factorial(a) {
    for(let i = 1; i <= a; i++) {
        b = b * i;
    }
    return b;
}
alert(factorial(a));




/*Написать функцию, которая вычисляет факториал переданного ей числа.*/
