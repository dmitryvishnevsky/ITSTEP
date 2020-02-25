let a = prompt("Enter your number");
let b = prompt("Enter another number");
let c;
for(let i = 0; i < b; i++){
    if(a % i == 0 && b % i == 0){
        c = i
    }
}
alert(c);