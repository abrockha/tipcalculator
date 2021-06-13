// need to use array, objects, primitive data types, this. keyword.

let taco = {
    price:[
        3.50,
        2.50,
        3.50,
        2.50,
        2.00
    ],
    meat:[
        "Shrimp",
        "Ground Beef",
        "Steak",
        "Fish",
        "Chicken"
    ]
};
let preTip = 0;
let newButton;


function calcPreTotal(){
    let numOfTacos = document.getElementById("numOfTacos").value;
    let meatSelection = document.querySelector("input[name=meat]:checked").value;
    let price = taco.price[meatSelection];
    let preTotal = price * numOfTacos;
    let meat = taco.meat[meatSelection];
    let newLI = document.createElement('li');
    newButton = document.createElement('BUTTON');
    newButton.innerHTML = "Remove";

    newLI.innerHTML = (numOfTacos + " " + meat + " tacos: " + preTotal.toFixed(2) + "            ");
    newLI.appendChild(newButton);
    document.getElementById("orderlist").appendChild(newLI);
    newButton.onclick = function(){
        preTip -= preTotal;
        this.parentElement.remove();
        document.getElementById('preTip').innerHTML = "Pre-Total: $" + preTip.toFixed(2);
    }
    preTip += preTotal;
    document.getElementById('preTip').innerHTML = "Pre-Total: $" + preTip.toFixed(2);
    console.log(preTip);
    return preTip;
}

function calcTip(preTip){
    console.log(preTip);
    let numOfGuests = document.getElementById("numOfGuests").value;
    let tipAmount = document.querySelector("input[name=tip]:checked").value;
    let otherAmount = 0;
    let total = 0;
    let tipTotal = 0;
    
 

    if  (tipAmount == "other"){
        otherAmount = Number(document.getElementById('other').value);
        tipAmount = 1;
        total = preTip + otherAmount;
        if (total < ((preTip * .21) + preTip) && (numOfGuests >= 6)){
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
    document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
    
}


document.getElementById('calculate').addEventListener('click', function(e){
    calcTip(preTip);
})

document.getElementById('order').addEventListener('click', function(e){
    calcPreTotal();
})