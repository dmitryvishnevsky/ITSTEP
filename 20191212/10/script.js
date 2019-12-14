let day = Number(prompt("Enter your day (1-31)"));
let month = Number(prompt("Enter your month (1-12)"));
let year = Number(prompt("Enter your year"));
if((month == 1 || month == 3 || month == 5 || month == 7 ||month == 8 || month == 10) && (day == 31)) { /*Месяцы, в которых 31 день, пользователь вводит последний день месяца */
day = 1;
month++;
}
if((month == 1 || month == 3 || month == 5 || month == 7 ||month == 8 || month == 10) && (day != 31)) { /*Месяцы, в которых 31 день, пользователь вводит  не последний день месяца */
day++;
}
if((month == 4 || month == 6 || month == 9 || month == 11) && (day == 30)) { /*Месяцы, в которых 30 дней, пользователь вводит последний день месяца */
day = 1;
month++;
}
if((month == 4 || month == 6 || month == 9 || month == 11) && (day != 30)) { /*Месяцы, в которых 30 дней, пользователь вводит не последний день месяца */
day++;
}
if(month == 2 &&  day<28) {
    day++;
}
if(month == 2 && day == 28 && (year % 400 == 0 || (year % 4 == 0 && year % 4 != 0)  )) { /*Февраль високосного года, юзер ввел 28 Февраля*/
    day++;
}
if(month == 2 && day == 28 && (year % 400 != 0 || year % 4 != 0 )) { /*Февраль невисокосного года, юзер ввел 28 Февраля*/
    day = 1;
    month++;
}
if(month == 2 && day == 29 && (year % 400 == 0 || (year % 4 == 0 && year % 4 != 0)  )) { /*Февраль високосного года, юзер ввел 28 Февраля*/
    day = 1;
    month++;
}
if(month == 12 && day != 31) { /*Декабрь не новый год*/
    day++;
}
if(month == 12 && day == 31) { /*Декабрь  новый год*/
    day = 1;
    month = 1;
    year++;
}
alert( day + "." + month + "." + year);


