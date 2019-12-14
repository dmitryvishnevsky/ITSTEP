let first = Number(prompt("1+2? \n 5 \n 1 \n 3"));
let score = 0;
if (first == 3) {
    score = score + 2;
}
let second = Number(prompt("2+2? \n 4 \n 5 \n 3"));

if (second == 4) {
    score = score + 2;
}
let third = Number(prompt("3+4? \n 2 \n 7 \n 11"));
if (third == 7) {
    score = score + 2;
} 
alert (score);
