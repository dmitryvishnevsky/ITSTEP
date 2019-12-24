let seat = Number(prompt("Enter your seat"));
let comp;
let berth;
let seatSide;
if(seat<37){
    comp = Math.ceil(seat / 4);
    seatSide = "not side seat"
}
else{
    comp = Math.floor((54 - seat + 2)/2);
    seatSide = "side seat";
}
if(seat % 2 == 0){
    berth = "upper berth";
}
else{
    berth = "lower berth";
}
alert("You have  " + seatSide + " in " + comp + " compartment, " + berth);