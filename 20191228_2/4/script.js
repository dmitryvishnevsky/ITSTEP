let length = Number(prompt("Enter the lenght"));
let width = Number(prompt("Enter the width"));
let square = 0;
function squareCount(length, width) {
    if(length == 0){
        square = width * width;
    }
    if(width == 0){
        square = length * length;
    }
    else{
        square = length * width
    }
    return(square);
}
alert(squareCount(length, width));


/*Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.*/