let a = prompt("Enter your passport number such as 'AA000000', where A = letter, 0 = digit");
let b = prompt("Enter your phone number such as '0XXXXXXXXX', where X = digit");
let c = prompt("Enter your ID code such as 'ХХХХХХХХХХ', where X = digit");
const aCheck = /[A-Z]{2,}\d{3,}/;
const bCheck = /0[0-9]{9,}/
const cCheck = /[0-9]{10,}/
if(aCheck.test(a) == true && bCheck.test(b) == true && cCheck.test(c) == true){
    console.log("All the data is correct")
}
else{
    console.log("Something is wrong")
}

