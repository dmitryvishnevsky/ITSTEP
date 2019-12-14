let number = Number(prompt("Enter your 5-digit number"));
let one = number%10;
let two = Math.floor(number/10)%10;
let three = Math.floor(number/100)%10;
let four = Math.floor(number/1000)%10;
let five = Math.floor(number/10000)%10;
if(number == String(one) + String(two) + String(three) + String(four) + String(five) ) {
    alert("Your number is a pallindrome")
}
else {
    alert("Your number is not a pallindrome")
}
