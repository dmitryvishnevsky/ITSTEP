let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
for(let i = 0; i < 11; i++){
    let a = Number(prompt("Enter your number"));
    if(a > 0){
        b++;
    }
    else if(a == 0){
        c++;
    }
    else{
        d++;
    }
    if(a % 2 == 0){
        e++;
    }
    if(a % 2 != 0){
        f++;
    }
}
alert("You entered " + b + " positive numbers " + c + " zeroes " + d + " negative numbers " + e + " even " + f + " odd numbers");