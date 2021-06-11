// need to use array, objects, primitive data types, this. keyword.

let taco = {
    price:3,
    meat:[
        "chicken",
        "ground beef",
        "steak",
        "shrimp",
        "fish"
    ]
};



document.getElementById('calculate').addEventListener('click', function(e){
    let numOfTacos = document.getElementById("numOfTacos").value;
    let numOfGuests = document.getElementById("numOfGuests").value;
    let preTip;
    let tipAmount = document.querySelector("input:checked").value;
    let otherAmount = 0;
    let total;
    let tipTotal;
    preTip = numOfTacos * 3;
 document.getElementById('preTip').innerHTML = "Pre-Total: $" + preTip;

    if (numOfGuests >= 6){
        tipAmount = 0.21;
        tipTotal = preTip * tipAmount;
        total = preTip + tipTotal  + otherAmount;
    }
    else if (tipAmount == "other"){
        otherAmount = Number(document.getElementById('other').value);
        tipAmount = 1;
        total = preTip + otherAmount;

    }
    else{
        tipTotal = preTip * tipAmount;
        total = preTip + tipTotal  + otherAmount;
    }

    
    console.log(otherAmount);
    console.log(tipTotal);
    document.getElementById('total').innerHTML = "Total: $" + total;
    
})