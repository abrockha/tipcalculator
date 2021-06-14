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
function TipCalculator(){
    this.preTip = 0;
    this.newButton = null;
    this.tipTotal = null;
    this.total = null;
}

 TipCalculator.prototype = {

    getRating: function(){
        let rating = "";
        let dropDownValue = document.getElementById('dropdown').selectedOptions;
        for (i=0;i < dropDownValue.length ; i++){
            rating += dropDownValue[i].value;
        }
        return rating;
    },

    calcPreTotal: function(){
        let numOfTacos = document.getElementById("numOfTacos").value;
        let meatSelection = document.querySelector("input[name=meat]:checked").value;
        let price = taco.price[meatSelection];
        let preTotal = price * numOfTacos;
        let meat = taco.meat[meatSelection];
        let newLI = document.createElement('li');
        this.newButton = document.createElement('BUTTON');
        this.newButton.innerHTML = "Remove";

        newLI.innerHTML = (numOfTacos + " " + meat + " tacos: " + preTotal.toFixed(2) + "            ");
        newLI.appendChild(this.newButton);
        document.getElementById("orderlist").appendChild(newLI);
        this.newButton.onclick = function(){
            this.preTip -= preTotal;
            this.parentElement.remove();
            document.getElementById('preTip').innerHTML = "Pre-Total: $" + this.preTip.toFixed(2);
        }
        this.preTip += preTotal;
        document.getElementById('preTip').innerHTML = "Pre-Total: $" + this.preTip.toFixed(2);
        console.log(this.preTip);
        return this.preTip;
    },

    calcTip: function(preTip){
        console.log(preTip);
        let numOfGuests = document.getElementById("numOfGuests").value;
        let tipAmount = document.querySelector("input[name=tip]:checked").value;
        let otherAmount = 0;
        this.total = 0;
        this.tipTotal = 0;
        
    

        if  (tipAmount == "other"){
            otherAmount = Number(document.getElementById('other').value);
            tipAmount = 1;
            this.total = this.preTip + otherAmount;
            if (this.total < ((this.preTip * .21) + this.preTip) && (numOfGuests >= 6)){
                this.total = (this.preTip *.21) + this.preTip;
            }
        }
        else if (numOfGuests >= 6){
            tipAmount = 0.21;
            this.tipTotal = this.preTip * tipAmount;
            this.total = this.preTip + this.tipTotal  + otherAmount;
            
        }
        else{
            this.tipTotal = this.preTip * tipAmount;
            this.total = this.preTip + this.tipTotal  + otherAmount;
        }

        
        console.log(otherAmount);
        console.log(this.tipTotal);
        document.getElementById('total').innerHTML = "Total: $" + this.total.toFixed(2);
        
    },



}
let myCalculator = new TipCalculator();
document.getElementById('calculate').addEventListener('click', function(e){
    myCalculator.calcTip(preTip);

    window.alert("Your total before tip is: $" + myCalculator.preTip.toFixed(2) + "\nYour tip amount is: $" + myCalculator.tipTotal.toFixed(2) + "\nYour total comes to: $" + myCalculator.total.toFixed(2)
    + "\nThank you for rating us " + myCalculator.getRating() + " stars!");
})

document.getElementById('order').addEventListener('click', function(e){
    myCalculator.calcPreTotal();
})