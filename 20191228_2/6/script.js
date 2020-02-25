let num1 = Number(prompt("Enter the lowest number"));
let num2 = Number(prompt("Enter the highest number"));
let b = 0;
function perfect(){
    for(let i = 1; i < a; i++){
        if(a % i == 0){
             b += i; 
        }
    }
    if(a == b){
        console.log(a);
    }
}
for(let j = num1; j <= num2; j++){
    perfect(j);
}

