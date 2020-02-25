let a = [
    [],
    [],
    [],
    [],
]
for(let j = 0; j <=12; j++){
    a[0].push("♠");
    a[1].push("♥");
    a[2].push("♦");
    a[3].push("♣");

}
for(let i = 0; i <= 8; i++){
    a[0][i] += i+2;
    a[1][i] += i+2;
    a[2][i] += i+2;
    a[3][i] += i+2;
}
    a[0][9] += "J";
    a[1][9] += "J";
    a[2][9] += "J";
    a[3][9] += "J";
    a[0][10] += "Q";
    a[1][10] += "Q";
    a[2][10] += "Q";
    a[3][10] += "Q";
    a[0][11] += "K";
    a[1][11] += "K";
    a[2][11] += "K";
    a[3][11] += "K";
    a[0][12] += "A";
    a[1][12] += "A";
    a[2][12] += "A";
    a[3][12] += "A";
    function RandomNum(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a[RandomNum(0,4)][RandomNum(0,12)]);