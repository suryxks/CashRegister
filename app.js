let billAmount = document.querySelector("#bill-amount");
let nextButton = document.querySelector("#next-btn");
let table = document.querySelector("#cash-table");
table.style.display = "none";
let div = document.querySelector("#content");
let message = document.createElement("p");
let cashSection = document.querySelector("#cash");

let cashGiven = document.querySelector("#cash-given");
let checkButton = document.querySelector("#check-btn");
let noOfNotesArr = document.querySelectorAll(".noOfNotes");
let balanceAMount = document.querySelector("#amount-return");
let notesArr = [2000, 500, 100, 20, 10, 5, 1];
cashSection.style.display = "none";


const nextClickHandler = () => {
    if (billAmount.value == "" || Number(billAmount.value) < 0) {
        message.innerText = "Please enter a valid bill amount to proceed to the next step";
        div.appendChild(message);

    } else {
        message.remove();
        cashSection.style.display = "block"
    }
}

const calculateNotes = balance => {
    let amount = balance;

    for (let i = 0; i < noOfNotesArr.length; i++) {


        noOfNotesArr[i].innerText = Math.trunc(amount / notesArr[i]);

        amount = amount % notesArr[i];


    }
    balanceAMount.innerHTML = `Balance amount: ${balance}`;
    balanceAMount.style.display = "block"
    table.style.display = "block";
}

function checkClickHandler() {
    table.style.display = "none";
    balanceAMount.style.display = "none"
    if (Number(billAmount.value) > Number(cashGiven.value) || Number(billAmount.value) < 0 || Number(cashGiven.value) < 0) {
        message.innerText = "Cash given should be greater than or equal to Bill amount and both of them should be positive";
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