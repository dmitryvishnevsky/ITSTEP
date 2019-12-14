let num = Number(prompt("Enter your number"));
answ="";
switch(num) {
    case 1: answ="!";
    break;
    case 2: answ="@";
    break;
    case 3: answ="#";
    break;
    case 4: answ="$";
    break;
    case 5: answ="%";
    break;
    case 6: answ="^";
    break;
    case 7: answ="&";
    break;
    case 8: answ="*";
    break;
    case 9: answ="(";
    break; 
    case 0: answ=")";
    break; 
    default: answ ="Введите правильно число";
}
alert(answ);