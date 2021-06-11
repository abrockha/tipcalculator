// need to use array, objects, primitive data types, this. keyword.

let taco = {
    price:[
        3.00,
        2.50,
        3.50,
        4.00,
        3.00
    ],
    meat:[
        "chicken",
        "ground beef",
        "steak",
        "shrimp",
        "fish"
    ]
};


function calcTip(){
    let numOfTacos = document.getElementById("numOfTacos").value;
    let numOfGuests = document.getElementById("numOfGuests").value;
    let preTip;
    let tipAmount = document.querySelector("input:checked").value;
    let otherAmount = 0;
    let total;
    let tipTotal;
    preTip = numOfTacos * 3;
 document.getElementById('preTip').innerHTML = "Pre-Total: $" + preTip;

    if  (tipAmount == "other"){
        otherAmount = Number(document.getElementById('other').value);
        tipAmount = 1;
        total = preTip + otherAmount;
        if (total < ((preTip * .21) + preTip)){
            total = (preTip *.21) + preTip;
        }
    }
    else if (numOfGuests >= 6){
        tipAmount = 0.21;
        tipTotal = preTip * tipAmount;
        total = preTip + tipTotal  + otherAmount;

    }
    else{
        tipTotal = preTip * tipAmount;
        total = preTip + tipTotal  + otherAmount;
    }

    
    console.log(otherAmount);
    console.log(tipTotal);
    document.getElementById('total').innerHTML = "Total: $" + total;
    
}


document.getElementById('calculate').addEventListener('click', function(e){
    calcTip();
})