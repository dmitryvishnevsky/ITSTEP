/* Калькулятор*/
let nmbrs = "";

function enter(a) {
    nmbrs += a;
    console.log(nmbrs);
}

function calc(a) {
    eval(nmbrs);
    console.log(eval(nmbrs));
}

function del() {
    nmbrs = "";
    console.log("number was deleted");
    return nmbrs;
}

function delChar() {
    nmbrs = nmbrs.slice(0, -1);
    console.log("last character was deleted");
    console.log(nmbrs);
    return (nmbrs);
}
/*Секундомер*/
let stopWatch = setInterval(start, 1000);
let i = 1;

function start() {
    console.log(i++);
}

function startTimer() {
    stopWatch = setInterval(start, 1000);

}

function pauseTimer() {
    stopWatch = clearInterval(stopWatch);
}

function stopTimer() {
    clearInterval(stopWatch);
    i = 1;
    console.log(0);
    return i;
}