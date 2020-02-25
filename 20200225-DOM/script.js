list = {
    modal: document.querySelector(`.modalWindow`),
    next: document.querySelector(`.next`),
    red: document.querySelector(`#red`),
    yellow: document.querySelector(`#yellow`),
    green: document.querySelector(`#green`)
    
}

let i = 1;
let j = 1;

function next() {
    switch (i) {

        case 1:
            list.yellow.style.background = "yellow";
            list.red.style.background = "grey";
            i = 2;
            break;
        case 2:
            list.yellow.style.background = "grey";
            list.green.style.background = "green";
            i = 3;
            break;
        case 3:
            list.green.style.background = "grey";
            list.red.style.background = "red";
            i = 1;
            break;
    }
}

function modalFunction() {
    switch(j) {
        case 1:
        list.modal.style.display = "block";
        j = 2;
        break;
        case 2:
        list.modal.style.display = "none";
        j = 1;
        break;
    }
    
}
function close(){
    list.modal.style.background = "red";
}