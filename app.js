var billAmount=document.querySelector("#bill-amount");
var nextButton=document.querySelector("#next-btn");
var div=document.querySelector("#content");
var message=document.createElement("p");
var table=document.createElement("table");
var cashGiven= document.createElement("h3");
var cashGivenInuptbox=document.createElement("input");
var checkButton=document.createElement("button");
checkButton.innerText="Check";
cashGiven.innerText="Cash Given:"
function nextClickHandler(){
    if(billAmount.value==""){
        message.innerText="Please enter a bill amount to proceed to the next step";
        div.appendChild(message);
        
    }
    else{
      message.remove();
       div.appendChild(cashGiven);
       div.appendChild(cashGivenInuptbox);
       div.appendChild(checkButton);
    }
}
function checkClickHandler(){
    console.log(billAmount.value);
    if(billAmount.value>cashGivenInuptbox.value){
        message.innerText="Cash given should be greater than or equal to Bill amount";
        div.appendChild(message);
    }
    else{
        message.remove();
        div.appendChild(table);
    }
}
nextButton.addEventListener("click",nextClickHandler);
checkButton.addEventListener("click",checkClickHandler);
table.innerHTML=`
<tbody><tr>
<th>No.of Notes
</th><td class="noOfNotes"></td>
<td class="noOfNotes"></td>
<td class="noOfNotes"></td>
<td class="noOfNotes"></td>
<td class="noOfNotes"></td>
<td class="noOfNotes"></td>
<td class="noOfNotes"></td>
</tr>
<tr>
<th>Note
</th><td>2000</td>
<td>500</td>
<td>100</td>
<td>20</td>
<td>10</td>
<td>5</td>
<td>1</td>
</tr>
</tbody>`