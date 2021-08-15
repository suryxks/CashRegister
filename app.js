var billAmount = document.querySelector("#bill-amount");
var nextButton = document.querySelector("#next-btn");
var table = document.querySelector("#cash-table");
table.style.display = "none";
var div = document.querySelector("#content");
var message = document.createElement("p");
var cashSection=document.querySelector("#cash");

var cashGiven = document.querySelector("#cash-given");
var checkButton=document.querySelector("#check-btn");
var noOfNotesArr = document.querySelectorAll(".noOfNotes");
var balanceAMount=document.querySelector("#amount-return");
var notesArr = [2000, 500, 100, 20, 10, 5, 1];
cashSection.style.display="none";


function nextClickHandler() {
    if (billAmount.value == "") {
        message.innerText = "Please enter a bill amount to proceed to the next step";
        div.appendChild(message);

    } else {
        message.remove();
        cashSection.style.display="block"
    }
}

function calculateNotes(balance) {
    var amount = balance;

    for (let i = 0; i < noOfNotesArr.length; i++) {


        noOfNotesArr[i].innerText = Math.trunc(amount / notesArr[i]);

        amount = amount % notesArr[i];

     
    }
    balanceAMount.innerHTML=`Balance amount: ${balance}`;
   table.style.display="block";
}

function checkClickHandler() {
    table.style.display="none";
    if (billAmount.value > cashGiven.value) {
        message.innerText = "Cash given should be greater than or equal to Bill amount";
        div.appendChild(message);
    } else {
        message.remove();
        var balance = cashGiven.value - billAmount.value;

        if (balance === 0) {
            message.innerText = "You Don't have to return anything"
            div.appendChild(message);
        } else {
            message.remove();
            calculateNotes(balance);
        }
    }
}
nextButton.addEventListener("click", nextClickHandler);
checkButton.addEventListener("click", checkClickHandler);