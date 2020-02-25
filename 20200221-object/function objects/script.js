let rect = {
    topLeftLat: 0,
    topLeftAlt: 5,
    botRigthLat: 8,
    botRigthAlt: -3
};
let width,
    height,
    perimeter = 0;

function infoRect(obj) {
    let first = obj.topLeftLat + ";" + obj.topLeftAlt;
    let second = obj.botRigthLat + ";" + obj.topLeftAlt;
    let third = obj.botRigthLat + ";" + obj.botRigthAlt;
    let fourth = obj.topLeftLat + ";" + obj.botRigthAlt;
    return first + "  " + second + "  " + third + "  " + fourth;

}

function countWidth(obj) {
    width = obj.botRigthLat - obj.topLeftLat;
    return width;
}

function countHeigth(obj) {
    height = obj.topLeftAlt - obj.botRigthAlt;
    return height;
}

function countArea(obj) {
    let area = width * height;
    return area;
}

function countPerimeter(obj) {
    perimeter = width * 2 + height * 2;
    return perimeter;
}

function changeWidth(obj) {
    rect.botRigthLat += Number(prompt("For how many increase the latitude?"));
    return infoRect(rect);
}

function changeHeight(obj) {
    rect.botRigthAlt -= Number(prompt("For how many increase the altitude?"));
    return infoRect(rect);
}

function changeEverything(obj) {
    rect.botRigthLat += Number(prompt("For how many increase the latitude?"));
    rect.botRigthAlt += Number(prompt("For how many increase the altitude?"));
    return infoRect(rect);
}

function moveX(obj) {
    let a = Number(prompt("For how many move the X axis?"));
    rect.topLeftAlt += a;
    rect.botRigthAlt -= a;
    return infoRect(rect);
}

function moveY(obj) {
    rect.topLeftLat, rect.botRigthLat += Number(prompt("For how many move the X axis?"));
    return infoRect(rect);
}

function moveEverything(obj) {
    let a = Number(prompt("For how many move the X axis?"));
    let b = Number(prompt("For how many move the Y axis?"));
    rect.topLeftAlt += a;
    rect.botRigthAlt -= a;
    rect.topLeftLat, rect.botRigthLat += b;
    return (infoRect(obj));
}

function isPointInside(obj) {
    let a = prompt("Enter the latitude of the point");
    let b = prompt("Enter the altitude of the point");
    if (a > rect.topLeftLat && a < rect.botRigthLat && b < rect.topLeftAlt && b > rect.botRigthAlt) {
        return true;
    } else {
        return false;
    }
}
console.log(infoRect(rect));