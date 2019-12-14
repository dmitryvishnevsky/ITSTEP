let am = Number(prompt("Enter your amount"));
let curr = prompt("Enter your currency");
switch(curr) {
    case "UAH" : alert(am * 23);
    break;
    case "EUR": alert(am * 0.8 );
    break;
    case "AZN": alert(am * 1.7);
    break;
    default: alert("Enter valid currency");
} 