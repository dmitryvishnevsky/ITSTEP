let year =prompt("Enter your year");
if (year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0 )) {
    alert("This is a leap year");
}
else {
    alert("This is not a leap year");
}
