do{
    let a = Number(prompt("Enter first number"));
    let b = Number(prompt("Enter second number"));
    let c = prompt("Enter the sign");
    let d = 0;
    switch(c){
        case "+":
            d = a + b;
        break;
        case "-":
            d = a - b;
        break;
        case "*":
            d = a * b;
        break;
        case "/":
            d = a / b;
        break;
    }
    alert(d);
    }
    while(confirm("Wanna some more?") = true);
