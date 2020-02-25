let a = prompt("Enter first number");
let b = prompt("Enter second number");
function one(a, b) {
    if(a < b){
        return -1 * a;
    }
    if(a > b){
        return a;
    }
    if(a == b){
        return 0;
    }
}
let two = one(a, b);
alert(two);



/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.*/