let numb = Number(prompt("Enter your 6-digit number"));
if((Math.floor(numb / 100000) % 10) + (Math.floor(numb / 10000) % 10) + (Math.floor(numb / 1000) % 10) == (Math.floor(numb / 100) % 10) + (Math.floor(numb / 10) % 10) + (Math.floor(numb / 1) % 10)){
    alert("Your ticket is lucky");
}
else{
    alert("Your ticket is not lucky");
}
