let a = Number(prompt("Enter hours"));
let b = Number(prompt("Enter minutes"));
let c = Number(prompt("Enter seconds"));
function seconds(){
    let d = a * 3600 + b * 60 + c;
    console.log(d);  
}
seconds(a, b, c);